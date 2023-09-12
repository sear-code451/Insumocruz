
## Command .type()

This works with followings tags:
- input
- textarea
and between other.

To know which ones to try the next error problem with:
~~~
    cy.visit("usar nuestra página de insumocruz")

    it('First test with command ".type()" ', () => {
        cy.get('div[class="content-navbar2"]').children('ul').find('>li').first().as('list-navbar2');

        cy.get('@list-navbar2').type('Productos');
    });
~~~

I leave you the following [**Link.**](https://docs.cypress.io/api/commands/type#Supported-Elements)