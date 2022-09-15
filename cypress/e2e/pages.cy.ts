describe("Pages ", () => {
  it("should have h1", () => {
    cy.visit("/").get("h1").should("contain.text", "Konrad Ullrich");
  });

  // it("passes", () => {
  //   cy.visit("");
  //   cy.get("a").each((page) => {
  //     const link = page.prop("href") as string;
  //     const isLink = !link.includes("mailto:");
  //     if (!isLink) return;
  //     cy.visit(link);

  //     cy.get("a").each((page) => {
  //       const link = page.prop("href") as string;
  //       const isLink = !link.includes("mailto:");
  //       //@ts-ignore
  //       const isInternal = link.includes(Cypress.config().baseUrl);
  //       if (!isLink) return;

  //       if (isInternal) {
  //         cy.visit(link);
  //       }
  //       if (!isInternal) {
  //         cy.request({
  //           url: link,
  //           failOnStatusCode: false, // allow good and bad response to pass into then
  //         }).then((response) => {
  //           Cypress.log({
  //             name: link,
  //             message: response.status,
  //           });
  //         });
  //       }

  //       cy.log(JSON.stringify({ link, isInternal, isLink }));
  //     });
  //   });
  // });
});
