
// ? Variables DOM
let input_user_name = document.getElementById('nombre');
let input_email = document.getElementById('email');
let input_password = document.getElementById('password');
let input_change_data = document.getElementById('send-data');
let button_click = document.getElementById('change');

// ?
const completed_button = async() => {
    // ? #send-data -> we will send the data that will be changed
    const user_name = input_user_name.value;
    const email = input_email.value;
    const password = input_password.value;
    const button = button_click.value;

    
    // ? Disable and able -> input

    const data = [
        input_user_name,
        input_email,
        input_password
    ];
    
    data.forEach(element => {
        if(element.getAttribute("disabled")) {
            element.setAttribute("disabled");
        } else{
            element.removeAttribute("disabled");
        }
        
    });
    
    // ? send of the data -> /user -> PUT
    try {
    
        const response = await fetch( '/user', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name,
                email,
                password,
                enviar: button
            })
    
        });
    
        return response.json();
    
    } catch (error) {
        console.error(`Error: ${error}`);
    }
    
};

