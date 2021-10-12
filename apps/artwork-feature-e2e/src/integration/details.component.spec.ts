describe('artwork-feature', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detailscomponent--primary&args=image;artist;title;date;placeOfOrigin;department_title;'));
  it('should render the component', () => {
    cy.get('jurisin-details').should('exist');
  });
});