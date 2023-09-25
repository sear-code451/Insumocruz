
// ? Import
import { valueList } from "../../../example/example";

// ? Remember basic code
describe('Using the commands "get","visit" ', () => {
    beforeEach( () => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
    } );

    it('Try command "visit" and "beforeEach" ', () => {
        
    });

    it('Try command "get" ', () => {
        cy.get('li[class="option-menu"]').first();
    });

    it('Try command "should" ', () => {
        cy.get('li[class="option-menu"]').first().contains("Productos");
        cy.get('li[class="option-menu"]').first().should("contain", "Productos");
    });

});

describe('Try command should', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
    });

    it('property "have.class"', () => {
        cy.get( 'ul[class="menu-navbar"]' ).find('li[class="option-menu"]').should( 'have.class', 'option-menu' );
    });

    describe('Try property "have.css"', () => {
        
            it('Property "have.css"... IMPORTANT: how to show a property in "none"', () => {
                cy.get('ul[class="menu-navbar"]').find('>li').first().should( 'have.css', 'list-style', 'outside none none' );
    
                cy.get('div[class="content-logo"]').find('img[class="logo-img"]');
            })

            it('Other test', () => {
                cy.get('div[class="container-search"]').should('have.css', 'display', 'flex');
            });

            it('Try the part "content-social-networks"', () => {
                cy.get('div[class="content-social-networks"]').should('have.css', 'padding', '5px 10px');
            });
    });

    describe('Try command "as" for using in the alias', () => {
        it('Try transform into a alias a img of the content-logo', () => {
            cy.get('div[class="content-logo"]').find('img[class="logo-img"]').as('content-img');

            cy.get('@content-img').should('have.attr', 'src', '../img/logo-final.png');
        });

        it('Try transform into a alias a "content-navbar2"', () => {
            cy.get('div[class="content-navbar2"]').children('ul').find('>li').filter(':nth-child(2)').as('navbar2-novedades');

            cy.get('@navbar2-novedades').should('have.class', 'option-menu');
        });
    });
});

describe('Try command "then" and "expect"', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
        cy.once('uncaught:exception', () => false);

    })

    it('try command then', () => {
        cy.get('div[class="content-navbar2"]').children('ul').find('>li').filter(':nth-child(3)').children('a').should('contain', 'Ofertas').as('navbar-3');

        cy.get('div[class="content-navbar2"]').then( () => {
            const third_navbar = cy.get('@navbar-3');
            third_navbar.should('have.text', 'Ofertas');
        } );
    });

    it('Try command "click"', () => {
        cy.get('div[class="button-menu-navbar"]').first();
    });

    it('Try command ".wrap"', () => {
        const myFuncion = ():string => {
            return "hello I'm pablo";
        }

        const functionPromesa = new Promise((resolve, reject) => {
            const content = myFuncion();
            if( content === "hello I'm pablo" ) {
                resolve(
                    {
                    message: 'This is message resolve into the property message',
                    other_message: 'this is other_message property'
                    }
                );
            }else reject('this is message reject')
        })

        cy.wrap( { greeting: myFuncion } ).invoke('greeting').should('eq', "hello I'm pablo");

        cy.wrap(functionPromesa).its('message').should('eq','This is message resolve into the property message' );

        cy.wrap(functionPromesa).its('other_message').should('eq','this is other_message property' );
    });
});

describe('Try command ".each" ', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
    })

    it('Testing with command "each", in my list the nav-bar2', () => {
        cy.get('div[class="content-navbar2"]').children('ul').find('>li').as('navbar2');

        cy.get('@navbar2').each( ( current, index ) => {
            const content = valueList(index);
            cy.wrap(current).should('have.class', 'option-menu');
            cy.wrap(current).find('>a').should('have.text', content );
            if( content === "Novedades" ) {
                cy.wrap(current).find('>a').should('have.text', "Novedades" );
            }
        })
    });
});

describe('Try command ".type()" ', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
    });

    // ! This will gives us an error and show us what elements it can be used with
    it('First test with command ".type()" ', () => {
        cy.get('div[class="content-navbar2"]').children('ul').find('>li').first().type('Productos');
    });
});

describe('Try command ".clear()"', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/public/html/index.html');
    });

    // ! This will gives us an error and show us what elements it can be used with
    it('We will try with the HTML tags', () => {
        cy.get('ul[class="menu-navbar"]').children('li').first().find('>a').as('navbar-productos');

        cy.get('@navbar-productos').should('contain', 'Productos');
    });


});


