describe('interview assessment questions', () => {
  it('logs in and fails to submit a contact us form', () => {
    //1. Go to this link
    cy.visit('https://practicetestautomation.com/')
    
    //2. Click on "PRACTICE" main menu item
    cy.get('#menu-primary-items').contains('Practice').click()
    
    //3. Click on Test Login Page
    cy.get('.post-content').contains('Test Login Page').click()
    
    //4. Login with the provided credentials
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    //5. Verify if "Logged In Successfully" message is displayed
    cy.get('.post-title').should('have.text', 'Logged In Successfully')
    
    //6. Go to "CONTACT" main menu item
    cy.get('#menu-primary-items').contains('Contact').click()
    
    //7. Click Submit without entering any information in the form
    cy.get('.wpforms-submit').click()
    
    //8. Verify that the appropriate error messages are shown
    cy.get('label.wpforms-error').each($element => {
      cy.wrap($element).should('have.text', 'This field is required.')
    });
  })
})