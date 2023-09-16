
export class Navbar1_800 {

    content_search():void {
        cy.get('div[class="content-navbar1"]').find('div[class="container-search"]').as('search');

        cy.get('@search').should('have.css', 'display', 'none');
        cy.get('@search').should('be.hidden');
    }

    social_networks():void {
        // TODO: this test of down, work with 950px width
        cy.get('div[class="content-navbar1"]').find('div[class="content-social-networks"]').as('social-networks');

        cy.get('@social-networks').should('not.be.visible');
        cy.get('@social-networks').should('have.css', 'display', 'none');
    }

    button_menu_navbar():void {
        cy.get('div[class="button-menu-navbar"]').as('nav-menu');
        cy.get('@nav-menu').should('have.css', 'display', 'flex');
    }

    button_click(indicator:number):void {
        cy.get('div[class="button-menu-navbar"]').as('nav-menu');
        cy.get('@nav-menu').find('>a').first().click().as('click-nav');
        switch (indicator) {
            case 1:
                cy.get('@click-nav').then(() => {
                cy.get('nav[class="content-menu-nav active-nav"]');
                cy.get('nav[class="content-menu-nav"]').should('not.exist');
            })
            break;

            case 2:
                cy.get('@click-nav').then(() => {
                    cy.get('nav[class="content-menu-nav active-nav"]').should('have.css', 'height', '7px');

                    cy.get('nav[class="content-menu-nav active-nav"]').should('have.css', 'transition', 'all 0.5s ease 0s');
                })
            break;
        }

    }

}

export class Navbar2_800 {
    checkExistence() {
        cy.get('div[class="content-navbar2"]').should('have.css', 'display', 'none');

        cy.get('div[class="content-navbar2"]').should('not.be.visible')
    }
}

export class Navbar3_800 {
    
}