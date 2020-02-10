describe('Los estudiantes taller', function() {
    it('Visits los estudiantes', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
	  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("en.jimenez@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("tallerpruebas02")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('Si estudias una maestria haz click aqui').click()
      cy.get('select').select('universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software')
      cy.contains('Mario Linares Vasquez').click()
      cy.get('.jsx-1802368871').find('input[name="id:MISO4208"]').click()
    })
})