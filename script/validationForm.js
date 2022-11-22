export const validationForm = () => {
    const messageValidate = document.querySelector('.validation_message');
    const cardNumberInput = document.getElementById('cardNumber').value;
    const cardHolderInput = document.querySelector('.input__holder').value;
    const cardCvvInput = document.querySelector('.input__cvv').value;
    
    const validateNumber = validateCardNumber(cardNumberInput);
    const validateHolder = validateCardHolder(cardHolderInput);
    const validateCvv = validateCardCvv(cardCvvInput);
    

    if (validateNumber === 'Неправильно введен номер карты'||
        validateHolder === 'Неправильно заполнено имя' ||
        validateCvv === 'Неправильно введены данные') {
        messageValidate.textContent = 'Данные карты не валидны';
        setTimeout(
            function () {
                messageValidate.textContent = ''
            }, 2000);
    } else {
        messageValidate.textContent = 'Данные карты валидны';
        setTimeout(
            function () {
                messageValidate.textContent = ''
            }, 2000);
    }
}

export const validateCardNumber = (cardNumberInput) => {
    const test = cardNumberInput.toString();
    const regExp = /^[\d]{16}$/g
    const match = test.match(regExp);
    if (match === null) {
        return 'Неправильно введен номер карты';
    };
    return match[0];
};

export const validateCardHolder = (cardHolderInput) => {
    const test = cardHolderInput.toString();
    const regExp = /^(?:[A-Z]+\s)(?:[A-Z]+)$/iu
    const match = test.match(regExp);
    if (match === null) {
        return 'Неправильно заполнено имя';
    }
    return match[0];
};

export const validateCardCvv = (cardCvvInput) => {
    const test = cardCvvInput.toString();
    const regExp = /^[\d]{3}$/g;
    const match = test.match(regExp);
    if (match === null) {
        return 'Неправильно введены данные';
    }
    return match[0];
};

