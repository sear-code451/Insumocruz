
// ? Checking main tags

describe('Checkign main tags', () => {
    it('Reviewing the page', () => {
        // cy.once('uncaught:exception', () => false);
        cy.visit('/');
        cy.get( 'a[title="facebook"]' );
        cy.get( 'header[class="content-header"]' ).find('img[class="logo-img"]');
        cy.get( 'div[class="content-navbar2"]' ).find('li[class="option-menu"]').first().should('contain', 'Productos');
        // cy.get('div[class="content-logo"]').type('class', 'content-logo' );

    });
});

describe('Command testing of ".should()"', () => {
    beforeEach(() => {
       cy.visit('/');
    });

    it('We will test the "have.class" command', () => {
        cy.get('div[class="content-navbar2"]').find('li[class="option-menu"]').first().should('have.class', 'option-menu');
    });

    it('We will test the "be.empty" command', () => {
        cy.get('div[class="content-social-networks"]').children('ul');
    });

    it('We will test the "have.css" command', () => {
        cy.get('div[class="content-navbar1"]').find('div[class="container-search"]').as('search-frame');

        cy.get('@search-frame').should('have.css', 'background-color', 'rgb(114, 193, 9)');
    });

});

describe.only('Command testing of ".filter()"', () => {
    // beforeEach -> visit baseURL: my page
    beforeEach(() => {
        cy.visit('/');
    });
     
    it('We will test the ":contains()" command', () => {
        cy.get('ul[class="menu-navbar"]').find('>li').filter(':contains("Novedades")');
    });

    it('We will test the ":nth-child()" command', () => {
        cy.get('ul[class="menu-navbar"]').find('>li').filter(':nth-child(2)');
    });

    it('We will test the "be.empty" and "exist" command', () => {
        cy.get('div[class="content-social-networks"]').find('svg[class="svg-inline--fa fa-facebook size-networks"]').should('exist');

        cy.get('div[class="button-menu-navbar"]').should('not.be.visible');
    });

});
