
// ? Requires
const bcrypt = require('bcryptjs');

// ? Variables Generals
let data_correct = 'Created successfully.';
let icon_message_incorrect = 'fa-solid fa-triangle-exclamation size';
let icon_message_correct = 'fa-sharp fa-light fa-circle-check size';
let result_message_incorrect = 'Incorrect: ' ;
let result_message_correct = 'Correct: ';

// ? normal
const normal = {
    offers_header: '/#offers',
    novedades_header: '/#novedades',
    class_content_result: 'not-exist',
    icon_message_result: icon_message_correct,
    result_message: result_message_correct,
    data_error: data_correct
}

// ? Message Correct
const listCorrect = {
    offers_header: '/#offers',
    novedades_header: '/#novedades',
    class_content_result: 'exist accepted',
    icon_message_result: icon_message_correct,
    result_message: result_message_correct,
    data_error: data_correct
}

// ? Message Incorrect
const listIncorrect = {
    class_content_result: 'exist',
    icon_message_result: icon_message_incorrect,
    result_message: result_message_incorrect,
    data_error: data_correct
}

const userData_normal = {
    offers_header: '/#offers',
    novedades_header: '/#novedades',
    user_name: '',
    email: '',
    password: '',
    email_guard: '',
    class_content_result: 'not-exist',
    icon_message_result: icon_message_correct,
    result_message: result_message_correct,
    data_error: data_correct
}

const userData_correct = {
    offers_header: '/#offers',
    novedades_header: '/#novedades',
    user_name: '',
    email: '',
    password: '',
    email_guard: '',
    class_content_result: 'exist accepted',
    icon_message_result: icon_message_correct,
    result_message: result_message_correct,
    data_error: data_correct
}

const userData_incorrect = {
    offers_header: '/#offers',
    novedades_header: '/#novedades',
    user_name: '',
    email: '',
    password: '',
    email_guard: '',
    class_content_result: 'exist',
    icon_message_result: icon_message_incorrect,
    result_message: result_message_incorrect,
    data_error: data_correct
}

const RoundIndex = (index, datas, password) => {
    if( index === 0 ) return { user_name: datas[index] };
    if( index === 1 ) return { email: datas[index] };
    if( index === 2 ) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync( password, salt );
        return {
            password: hash     
        }
    };
    // password: datas[index]
};

//? Export
module.exports = {
    listCorrect,
    listIncorrect,
    normal,
    userData_correct,
    userData_incorrect,
    userData_normal,
    RoundIndex
};

