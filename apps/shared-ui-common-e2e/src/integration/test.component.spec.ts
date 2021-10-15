describe('shared-ui-common', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponent--primary&args=input;'));
  it('should render the component', () => {
    cy.get('jurisin-test').should('exist');
  });
});