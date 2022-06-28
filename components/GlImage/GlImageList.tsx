import useTimeOut from "@hooks/useTimeout";
import React, { useRef, useState } from "react";

import GLImage, { IGLImageProps } from "./GLImage";
import useMasks from "./useMasks";
import useNextImage from "./useNextImage";

interface IGlImageListProps
  extends Omit<IGLImageProps, "imageA" | "imageB" | "fade"> {
  images: string[];
}

const GlImageList: React.FunctionComponent<IGlImageListProps> = (props) => {
  const { images, duration = 600, ...rest } = props;

  const [fade, setFade] = useState(false);

  const { stop, start } = useTimeOut({
    cb: () => {
      setFade((i) => !i);
      return true;
    },
    ms: 5000,
  });

  const { preparedImages, next } = useNextImage({ images });

  const getMask = useMasks({ mask: "random" });

  return (
    <GLImage
      {...rest}
      onChangeComplete={next}
      onMouseEnter={() => {
        setFade((i) => !i);
        stop();
      }}
      onMouseLeave={() => {
        setFade((i) => !i);
        start();
      }}
      effectFactor={0.5}
      duration={duration}
      mask={getMask()}
      fade={fade}
      imageA={preparedImages[0]}
      imageB={preparedImages[1]}
    />
  );
};

export default GlImageList;
