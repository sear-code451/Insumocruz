
## Command .filter()

An correct usage is see the document of cypress, look at the [**Link.**](https://docs.cypress.io/api/commands/filter)

This works in Jquery, look at the [**Link.**](https://api.jquery.com/filter/)

# Correct Usage

The correct usage is the following:
~~~
    cy.get('td').filter('.users');
~~~

**tips:** a tip, to choose one from the list that we want, can be done as follows:
~~~
    cy.get('ul[class="menu-navbar"]').find('>li').filter(':nth-child(2)');
~~~

**nth-child(2):** this is for choose we want of the list.