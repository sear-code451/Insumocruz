
describe('We will try with command ".clear()"', () => {
    beforeEach(() => {
            cy.visit('http://localhost:8080/contact');
            cy.once('uncaught:exception', () => false);    
    })

    it('Well will try tag element into the DOM', () => {
        cy.get('p[class="paragraph-knowledge"]').first().find('input').type("Hello World").as("greeting");

        cy.get('@greeting').clear();
    });
});