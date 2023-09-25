
// ? Import
import {
    valueList,
    NavigationPage
} from "../../../example/example";

// ? Process Test
describe('example with command "click"', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    })

    it('Try command', () => {
        cy.get('div[class="menu-knowledge"]').find('>button').first();
        cy.get('div[class="menu-knowledge"]').find('>button').first().click()
    });

    it('Try command ".then()"', () => {
        cy.get('div[class="menu-knowledge"]').find('>button').first().then( button => {
            cy.wrap(button).click();
        })
    });

    it('Try command ".then() 2"', () => {
        cy.get('div[class="menu-knowledge"]').find('>button').first().then( button => {
            cy.wrap(button).should('contain', 'Javascript');
            cy.wrap(button).should('contain', 'Javascript').click();
        })
    });

    it('Try command ".then()" third test', () => {
        cy.get('div[class="menu-knowledge"]').find('>button').first().then( button => {
            expect(button.text()).to.contain('Javascript');
        })
    });
});

describe('Example with command ".each" ', () => {
    it('Testing how command ".each" works ', () => {
        
    });
});

describe('Try command ".type()" ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/contact');
        cy.once('uncaught:exception', () => false);
    });

    it('First test with command ".type()" ', () => {
        cy.get('form[id="contact-form"]').find('>p').first().as('input-test');
        cy.get('@input-test').find('input').type('Hello World');
    });
});

describe.only('We will try file that content class ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/contact');
        cy.once('uncaught:exception', () => false);
    });

    const formulario = new NavigationPage();
    
    it('We will try method "formPage()" ', () => {
        formulario.formPage();
    });

    

});