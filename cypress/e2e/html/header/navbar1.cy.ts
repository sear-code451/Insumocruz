
// ? Import
import { Navbar1, Navbar2, Navbar3 } from "../../../../public/typescript/navbar1-cy";

// ? content-logo 
describe('Check: content-navbar1', () => {
    const checking = new Navbar1();
    beforeEach( () => {
       cy.visit('/');
    });

    it('Check navbar1: div content-logo', () => {
        checking.content_logo();
    });

    describe('Check container-search', () => {
        beforeEach(() => {
            cy.get('div[class="container-search"]').find('form').as('search');
        })
        it('Check input', () => {
            checking.container_search_input();
        });

        it('Check button', () => {
            checking.container_search_button();
        });
    });

    describe('Check: content.social-networks', () => {
        beforeEach(() => {
            cy.get('div[class="content-social-networks"]').find('ul').as('content-list');
        })

        it('Check: content_social_networks -> ul', () => {
            checking.content_social_networks_ul();
        });

        it('Check: content_social_networks -> ul -> li', () => {
           checking.content_social_networks_list()
        });
    });

    describe('Check: button-menu-navbar', () => {
        it('Check if exis, but the result have be "none"', () => {
            checking.button_menu_navbar();
        });
    });

});

describe('Check: content-navbar2', () => {
    const checking = new Navbar2();
    beforeEach(() => {
        cy.visit('/');
    })

    it('Check the propierties of the content-navbar2', () => {
        checking.navbar2_properties();
    });

    describe('Check: of the tag ul, li and a ', () => {
        beforeEach(() => {
            cy.get('ul[class="menu-navbar"]').as('ul-navbar2');
        });
        
        it('Check: content-navbar2 -> ul', () => {
            checking.menu_navbar_ul();
        });
    
        it('Check: content-navbar2 -> ul -> li', () => {
            checking.menu_navbar_li();    
        });

        it('Check: content-navbar2 -> ul -> li -> a', () => {
            checking.menu_navbar_a();
        });

    });

});

describe('Check: content-menu-nav', () => {
    const checking = new Navbar3();
    beforeEach(() => {
        cy.visit('/');
    })

    it('Check the exist of: content-menu-nav', () => {
        checking.tryExist();
    });
});