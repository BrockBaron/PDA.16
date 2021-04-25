describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should update display with running total when multiple numbers are clicked', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '123')
  })

  it('should display result of arithmetic operation', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    
    cy.get('.display').should('contain', '3')
  })

  xit('should display result of arithmetic operation equaling negative number', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  })

  xit('should display result of arithmetic operation equaling float number', () => {
    cy.get('#number5').click();
    cy.get('#operator_divided').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.6')
  })

  xit('should display result of arithmetic operation equaling larg number greater than 10 sig fig', () => {
    //14 9's by 8 9s = 9.9999998999999e+21
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '9.9999998999999e+21')
  })

  xit('should display apropriate output in even of exceptional circumstance dividing by 0', () => {
    // the code should diplay Error: Division by zero, when numner is divide by zero.
    
    cy.get('.display').should('contain', '')

})