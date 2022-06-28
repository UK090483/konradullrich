import * as React from "react";

import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import useEase from "./useEase";
import Image, { ImageLoader } from "next/image";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";

const shaders = Shaders.create({
  test: {
    frag: GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D f;
  uniform sampler2D t;
  uniform sampler2D b;

  uniform float progress;
  uniform float effectFactor;
 
  void main() {
    vec4 distortion = texture2D(b, uv);
    vec2 distortedPosition = vec2(uv.x + progress * (distortion.r*effectFactor), uv.y);
    vec2 distortedPosition2 = vec2(uv.x - (1.0 - progress) * (distortion.r*effectFactor), uv.y);

    vec4 _texture = texture2D(f, distortedPosition);
    vec4 _texture2 = texture2D(t, distortedPosition2);
    vec4 finalTexture = mix(_texture, _texture2, progress);
    
    gl_FragColor = finalTexture;
  }
  `,
  },
});

export interface IGLImageProps {
  effectFactor?: number;
  imageA: string;
  imageB: string;
  fade: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onChangeComplete?: () => void;
  width?: number;
  height?: number;
  duration?: number;
  mask?: string;
  className?: string;
}

const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const GLImage: React.FunctionComponent<IGLImageProps> = ({
  effectFactor = 0.5,
  imageA,
  imageB,
  fade,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onChangeComplete = () => {},
  width = 500,
  height = 500,
  duration = 500,
  mask = "triangle",
  className,
}) => {
  const prevState = React.useRef(false);
  const value = useEase({
    ease: "easeOutCubic",
    duration,
    active: fade,
    onEaseDone: (a) => {
      if (prevState.current !== a) {
        onChangeComplete();
        prevState.current = a;
      }
    },
  });

  const [Base42ImageA, setBase42ImageA] = React.useState(
    "https://picsum.photos/id/237/200/300"
  );
  const [Base42ImageB, setBase42ImageB] = React.useState(
    "https://picsum.photos/id/227/200/300"
  );

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (!e) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const image = e.currentTarget;

    console.log(image);

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // We get the 2d drawing context and draw the image in the top left
    canvas.getContext("2d")?.drawImage(image, 0, 0);

    // Convert canvas to DataURL and log to console
    const dataURL = canvas.toDataURL();
    // console.log(dataURL);
    // logs data:image/png;base64,wL2dvYWwgbW9yZ...

    setBase42ImageA(dataURL);
    //console.log(base64);
  };

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-0 h-0 overflow-hidden">
        <canvas ref={canvasRef}></canvas>
        <Image
          // loader={myLoader}
          onLoad={handleLoad}
          layout={"fill"}
          src={imageA}
          sizes="50vw"
          alt="dont show"
        />
      </div>
      <Surface style={{ marginBottom: -8 }} width={width} height={height}>
        <Node
          shader={shaders.test}
          uniforms={{
            f: Base42ImageA,
            t: Base42ImageB,
            b: mask,
            progress: value,
            effectFactor: fade ? effectFactor : effectFactor * -1,
          }}
        />
      </Surface>
    </div>
  );
};

export default GLImage;
