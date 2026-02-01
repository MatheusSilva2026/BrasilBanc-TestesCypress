describe('Cadastro', () => {
  it('passes', () => {

    // Visit a web page
    cy.visit('https://brasilbanc.netlify.app')
    // Assert that the page contains specific text
    cy.get('.header-buttons > .btn-primary').click();
    cy.get('#nome').type('Teste Cypress');
    cy.get('#cpf-cadastro').type('12345678900');
    cy.get('#email').type('fulano@detal.com');
    cy.get('#data-nascimento')
    .should('be.visible')
    .invoke('val', '2000-01-01')
    .trigger('change');
    cy.get('#rua').type('Rua Exemplo');
    cy.get('#numero').type('123');
    cy.get('#bairro').type('Bairro Exemplo');
    cy.get('#cidade-uf').type('Cidade Exemplo, EX');
    cy.get('#senha-cadastro').type('12345678');
    cy.get('#confirmar-senha').type('12345678');
  })
})