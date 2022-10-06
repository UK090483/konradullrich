describe("Pages ", () => {
  it(`should have h1 ${Cypress.config("baseUrl")}`, () => {
    cy.visit("/").get("h1").should("contain.text", "Konrad Ullrrrrddddrich");
  });
});
