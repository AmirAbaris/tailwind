describe('add a task process', () => {
  beforeEach(() => {
    // visit home url
    cy.visit('');
  });

  it('should add a task', () => {
    // click the button with text 'Add task'
    cy.get('button').contains('Add task').click();

    // add input text
    cy.get('input[formControlName="titleCtrl"]').type('lets test this cypress!');

    // click on submit btn
    cy.get('.test button').contains('Add').should('exist').click();
  });
});
