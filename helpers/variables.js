
// ? Variables Generals
let data_correct = 'Created successfully.';
let icon_message_incorrect = 'fa-solid fa-triangle-exclamation size';
let icon_message_correct = 'fa-sharp fa-light fa-circle-check size';
let result_message_incorrect = 'Incorrect: ' ;
let result_message_correct = 'Correct: ';

// ? normal
const normal = {
    class_content_result: 'not-exist',
    icon_message_result: icon_message_correct,
    result_message: result_message_correct,
    data_error: data_correct
}

// ? Message Correct
const listCorrect = {
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

const userData = {
    user_name: '',
    email: '',
    password: ''
}

//? Export
module.exports = {
    listCorrect,
    listIncorrect,
    normal,
    userData
};

