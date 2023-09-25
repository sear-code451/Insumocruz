
const valueList = ( indice:number ):string => {
    switch ( indice ) {
        case 0:
            return "Productos";
        case 1:
            return "Novedades";
        case 2:
            return "Ofertas";
        case 3:
            return "Contáctanos";
        case 4:
            return "Cuenta";
    
        default: 
            return "Does not exist"
    }
}

class NavigationPage {
    
    formPage(){
        cy.get('form[id="contact-form"]');
    }

}

export {
    valueList,
    NavigationPage
}
