const masks = {
  triangle: "1.jpg",
  "fish-scale": "2.jpg",
  noise: "3.jpg",
  clouds: "4.png",
  5: "5.png",
  6: "6.jpg",
  7: "7.jpg",
  8: "8.jpg",
  9: "9.jpg",
  10: "10.jpg",
  11: "11.jpg",
  12: "12.jpg",
  13: "13.jpg",
  14: "14.jpg",
  15: "15.jpg",
  16: "16.jpg",
};

const PREFIX = "/img/displacement/";

type useMasksProps = {
  mask: keyof typeof masks | (keyof typeof masks)[] | "random";
};
const useMasks = (props: useMasksProps) => {
  const { mask } = props;

  const getMask = () => {
    if (mask === "random") {
      const items = Object.values(masks);
      return PREFIX + items[Math.floor(Math.random() * items.length)];
    }
    if (typeof mask === "string") {
      return PREFIX + masks[mask];
    }
    if (Array.isArray(mask)) {
      return PREFIX + masks[mask[Math.floor(Math.random() * mask.length)]];
    }
  };

  return getMask;
};

export default useMasks;
