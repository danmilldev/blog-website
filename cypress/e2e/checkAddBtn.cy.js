describe('testing add button and the window', () => {

  it('should check if the add window is available', () => {
    cy.visit('/');
    cy.contains("New Post").click();
    cy.contains("New Post Window");
  })

  it('should close the add posting window', () => {
    cy.visit('/');
    cy.contains("New Post").click();
    cy.contains("Close").click();
    cy.contains("New Post Window").should("not.exist");
  });

  it('should add a new Post via the add post window', () => {
    cy.visit('/');
    cy.contains("New Post").click();
    cy.get("#title-input").type("Nice new text");
    cy.get("#description-input").type("some simple input text");
    cy.contains("Add Post").click();
    cy.contains("Nice new text");
  });

  it('should render an error message for title and description input box', () => {
    cy.visit("/");
    cy.contains("New Post").click();
    cy.get("#title-input").type("Nice");
    cy.contains("Add Post").click();
    cy.contains("ERROR:");
    cy.get("#title-input").type("Nice new text");
    cy.contains("Add Post").click();
    cy.get("#description-input").type("i");
    cy.contains("ERROR:");
    cy.get("#description-input").type("some simple input text");
    cy.contains("Add Post").click();
    cy.contains("ERROR:").should("not.exist");
  });

  it('should not see an error message on closing the overlay-box and open again', () => {
    cy.visit("/");
    cy.contains("New Post").click();
    cy.get("#title-input").type("Nice");
    cy.contains("Add Post").click();
    cy.contains("ERROR:");
    cy.contains("Close").click();
    cy.contains("New Post").click();
    cy.contains("ERROR:").should("not.exist");
  });
})
