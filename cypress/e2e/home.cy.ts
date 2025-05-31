describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("https://www.leejunkim.com/");
  });

  it("should show your name and intro message", () => {
    cy.contains("Hi, I'm Leejun Kim.").should("exist");
    cy.contains("👋 Welcome to my portfolio/blog!").should("exist");
  });

  it("should contain an About section", () => {
    cy.contains("📝 About this website").should("exist");
    cy.contains("Show Your Work");
    cy.contains("Learn in Public");
  });
});
