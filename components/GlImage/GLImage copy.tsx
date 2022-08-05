import * as React from "react";

import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import useEase from "./useEase";
import useNextImage from "./useNextImage";

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

interface IGLImageProps {
  images?: string[];
  effectFactor?: number;
}

const GLImage: React.FunctionComponent<IGLImageProps> = ({
  images = [
    "/img/Img20.jpg",
    "/img/Img21.jpg",
    "/img/Img22.jpg",
    "/img/Img23.jpg",
    "/img/Img24.jpg",
    "/img/Img25.jpg",
  ],
  effectFactor = 0.5,
}) => {
  const [active, setActive] = React.useState(false);

  const { preparedImages, next } = useNextImage({ images });

  const value = useEase({
    ease: "easeInQuad",
    duration: 1000,
    active,
    onEaseDone: (a) => {
      if (!a) {
      }
    },
  });

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      next();
      setActive((i) => !i);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [next]);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Surface width={500} height={500}>
        <Node
          shader={shaders.test}
          uniforms={{
            f: preparedImages[0],
            t: preparedImages[1],
            b: `/img/displacement/1.jpg`,
            progress: value,
            effectFactor: effectFactor,
          }}
        />
      </Surface>
    </div>
  );
};

export default GLImage;
