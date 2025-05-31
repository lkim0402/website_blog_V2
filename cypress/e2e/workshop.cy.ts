describe("Workshop Page", () => {
  beforeEach(() => {
    cy.visit("https://www.leejunkim.com/workshop");
  });

  it("displays workshop title and description", () => {
    cy.contains("workshop").should("exist");
  });

  it("navigates to a post when clicked", () => {
    cy.get(".post-box-class").first().debug().click();
    // First, check that the <a> tag inside the post-box-class contains the correct href
    cy.get(".post-box-class a") // Get the <a> inside the post box
      .should("have.attr", "href")
      .and("include", "/post/"); // Make sure the href includes /post/

    // Now, click on the <a> tag (Link) to navigate
    cy.get(".post-box-class a").first().click();

    // Verify that the URL changes to include /post/
    cy.url().should("include", "/post/");
  });
});
