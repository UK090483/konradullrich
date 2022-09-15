import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "cypress run ",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
