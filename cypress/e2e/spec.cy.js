describe('Main Reservations Page', () => {
  beforeEach(() => {
    cy.request('http://localhost:3001/api/v1/reservations')
    cy.intercept('GET', 'http://localhost:3000/', {fixture: '../fixtures/mainPage.json'})
  })
  it('should display a logo on main page',() => {
    cy.get('.app-title').contains("Turing Cafe Reservations")
  })
  it('should have a container that holds all of the reservations', () =>{
    cy.get('.dashboard-container').children().should("have.length", "2")
  })
  it('should display a form on the page on load with four inputs and a button', () => {
    cy.get('form-container').children().should("have.length", "5")
  })
  it('should be able to select and inputs and fill them with corresponding values', () => {
    cy.get('input[type="text"]')
    .type('Ciera')
    .should('have.value', 'Ciera')
    cy.get('input[type="number"]')
    .type('5')
    .should('have.value', '5')
  })
  it('should be able to add a new reservation', () => {
    cy.get('.newReservation-btn').click()
    cy.get('.dashboard-container').children().should('have.length', "3")
  })
})