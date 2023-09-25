
import {
    Navbar1_800,
    Navbar2_800,
    Navbar3_800
} from "../../../../public/typescript/navbar1-query-800";

describe('Check: content-navbar1', () => {
    const checking = new Navbar1_800();
    
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(800, 1024);
        
    })

    it('Check: content-search', () => {
        checking.content_search();
    });

    it('Check: content-social-networks', () => {
        checking.social_networks();
    });

    it('Check: button-menu-navbar', () => {
        checking.button_menu_navbar();
    });

    describe('Check: button-menu-navbar -> onclick', () => {

            it('Check: button-menu-navbar -> onclick', () => {
                const indicator:number = 1;
                checking.button_click(indicator);
            });
        
            it('Check: the content in where work the page', () => {
                const indicator:number = 2;
                checking.button_click(indicator);
            });        

    });

});

describe('Check: content-navbar2', () => {
    const checking = new Navbar2_800();
    
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(800, 1024);
    })

    it('Check its existence', () => {
        checking.checkExistence();
    });
});

describe.only('Check: content-menu-nav', () => {
    const checking = new Navbar3_800();
    
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(800, 1024);
    })
});