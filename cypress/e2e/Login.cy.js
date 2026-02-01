describe('Teste de Login', ()=> {
    it('Deve realizar login com sucesso', ()=>{
        const cpf = '12345678900';
        const senha = '12345678';

        // Visitar a página de login
        cy.visit('https://brasilbanc.netlify.app')

        // Preencher o formulário de login
        cy.get('.btn-secondary').click();
        cy.get('#cpf-login').type(cpf);
        cy.get('#senha-login').type(senha);
        cy.get('#modal-login > .modal-content > form > .btn').click();
    })
})