
describe('Reviewing our index page', () => {
    it('First testing', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('http://127.0.0.1:5500/public/html/index.html#');
        // cy.viewport(600, 600);
        // cy.get('div[class="button-menu-navbar"]').click();
        cy.get('li[class="option-menu"]').contains('Productos');
        cy.get('li[class="option-menu"]').contains('Productos');
        cy.get('[class="option-menu"]').find('a').contains('Productos');
        // cy.get('i').parents('a').get('[class="fa-brands fa-facebook size-networks"]');
    });
});

describe('div2 > content-navbar2', () => {
    it('Second test', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('http://127.0.0.1:5500/public/html/index.html#');
        cy.get('[class="option-menu"]').parents('[class="menu-navbar"]');
        // cy.get('[class="option-menu"]').find('a').contains('');
        // cy.get('[class="option-menu"]').;
    });
});