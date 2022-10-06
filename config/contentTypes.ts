type contentType = {
  name: string;
  hasPage: Boolean;
};

type Block = {
  name: string;
  hasPage: Boolean;
};

const contentTypes: contentType[] = [
  { name: "page", hasPage: true },
  { name: "post", hasPage: true },
];

const Blocks: Block[] = [];

export default contentTypes;
