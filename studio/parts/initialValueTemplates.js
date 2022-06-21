import T from "@sanity/base/initial-value-template-builder";

// Just for fun: List the names of every tool installed in this Sanity studio:

export default [
  ...T.defaults(),
  T.template({
    id: "page-by-pageType",
    title: "Page by page type",
    description: "Page by a specific page type",
    schemaType: "page",
    parameters: [{ name: "pageTypeId", type: "string" }],
    value: (params) => {
      return { pageType: { _type: "reference", _ref: params.pageTypeId } };
    },
  }),

  T.template({
    id: "personsInstitutions",
    title: "Person with name",
    description: "Page by a specific page type",
    schemaType: "person",
    parameters: [{ name: "pageTypeId", type: "string" }],
    value: (params) => {
      const url = window.location.href;
      const idStart = url.split(";")[1];
      if (!idStart) return {};
      const id = idStart.split("%2C")[0];
      if (id.includes("user.")) return {};
      console.log(url.replace(id, `user.${id}`));
      const newUrl = url.replace(id, `user.${id}`);

      window.location.replace(newUrl);
      return { _id: "user.dfhksdf-sdfsdfsdf", name: "name" };
    },
  }),
];
