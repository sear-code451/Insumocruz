
export class Navbar1 {

    content_logo():void {
        cy.get('div[class="content-logo"]').children('img').as('logo');
        cy.get('@logo').should('have.css', 'width', '240px');
        cy.get('@logo').should('have.css', 'height', '60.95000076293945px');
    }

    container_search_input():void {
        cy.get('@search').find('input').as('input')

        cy.get('@input').type('Pablo andres').clear();
        cy.get('@input').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('@input').should('have.css', 'flex', '1 1 0%');
        cy.get('@input').should('have.css', 'padding', '10px');
        cy.get('@input').should('have.css', 'width', '400px');
    }

    container_search_button():void {
        cy.get('@search').find('button').as('button');
        cy.get('@button').should('have.css', 'cursor', 'pointer');

        cy.get('@button').find('img').should('have.css', 'width','20px')
    }

    content_social_networks_ul():void {
        cy.get('@content-list').should('have.css', 'display', 'flex');
    }

    content_social_networks_list():void {
        cy.get('@content-list').find('li').should('have.css', 'list-style', 'outside none none');

        cy.get('@content-list').find('>li').filter(':nth-child(1)').children('a').should('have.attr', 'title', 'facebook');

        cy.get('@content-list').find('>li').filter(':nth-child(2)').children('a').should('have.attr', 'title', 'whatsapp');

        cy.get('@content-list').find('>li').filter(':nth-child(3)').children('a').should('have.attr', 'title', 'icon-sesion');

        cy.get('@content-list').find('>li').filter(':nth-child(4)').children('a').should('have.attr', 'title', 'trolley-shoppins');
    }

    button_menu_navbar():void {
        cy.get('div[class="button-menu-navbar"]').should('have.css', 'display', 'none')
    }

}

export class Navbar2 {
    navbar2_properties():void {
        cy.get('div[class="content-navbar2"]').should('have.css', 'background-color', 'rgb(114, 193, 9)');

        cy.get('div[class="content-navbar2"]').should('have.css', 'margin', '20px 0px');
    }
    
    menu_navbar_ul():void {
        cy.get('@ul-navbar2').should('have.css', 'display', 'flex');
        cy.get('@ul-navbar2').should('have.css', 'justify-content', 'space-around');
        cy.get('@ul-navbar2').should('have.css', 'align-items', 'center');
    }

    menu_navbar_li():void {
        cy.get('@ul-navbar2').find('>li').should('have.css', 'list-style', 'outside none none');
    }

    menu_navbar_a():void {
        cy.get('@ul-navbar2').find('>li>a').as('a-navbar2');
        cy.get('@a-navbar2').should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('@a-navbar2').should('have.css', 'position', 'relative');

        cy.get('@ul-navbar2').children('li').filter(':nth-child(1)').contains('Productos');
        
        cy.get('@ul-navbar2').children('li').filter(':nth-child(2)').contains('Novedades');

        cy.get('@ul-navbar2').children('li').filter(':nth-child(3)').contains('Ofertas');

        cy.get('@ul-navbar2').children('li').filter(':nth-child(4)').contains('Contáctanos');
    }
}

export class Navbar3 {
    tryExist():void {
        cy.get('nav[class="content-menu-nav"]').as('menu-nav');
        cy.get('@menu-nav').should('not.be.visible')
        cy.get('@menu-nav').should('be.hidden')
        cy.get('@menu-nav').should('have.css', 'display', 'none');
    }
}