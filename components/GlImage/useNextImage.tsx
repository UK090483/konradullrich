import React, { useState } from "react";

type useNextImageProps = {
  images: string[];
};

const useNextImage = (props: useNextImageProps) => {
  const { images } = props;

  const [s, setS] = useState([0, 1, 1]);

  const next = React.useCallback(() => {
    setS((i) => {
      return i[2] % 2 === 0
        ? [i[0], (i[1] + 2) % images.length, ++i[2]]
        : [(i[0] + 2) % images.length, i[1], ++i[2]];
    });
  }, [images.length]);

  return { next, preparedImages: [images[s[0]], images[s[1]]] };
};

export default useNextImage;
