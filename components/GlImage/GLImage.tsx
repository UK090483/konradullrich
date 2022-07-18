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

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Surface style={{ marginBottom: -8 }} width={width} height={height}>
        <Node
          shader={shaders.test}
          uniforms={{
            f: imageA,
            t: imageB,
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
