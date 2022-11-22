import {validateCardNumber, validateCardHolder, validateCardCvv} from "./validationForm.js";

describe('Проверка валидатора держателя карты', () => {
    it('Валидатор имени работает корректно', () => {
        expect(validateCardHolder('Petrov Ivan')).toBe('Petrov Ivan');
    });

    it('Валидатор имени работает корректно с некорректными данными', () => {
        expect(validateCardHolder('Petrov')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('Petrov Ivan Ivanovich')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('Petrov Иван')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('Петров')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('Petrov123')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('Petrov 123')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('123 456')).toBe('Неправильно заполнено имя'); 
        expect(validateCardHolder('Petrov, Ivan')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('.Petrov Ivan')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('.,')).toBe('Неправильно заполнено имя');
        expect(validateCardHolder('')).toBe('Неправильно заполнено имя');
    });
});

describe('Проверка валидатора номера карты', () => {
    it('Валидатор номера работает корректно при корректном вводе', () => {
        expect(validateCardNumber('1234567891234567')).toBe('1234567891234567');
    });

    it('Валидатор номера работает корректно при неправильном вводе', () => {
        expect(validateCardNumber('123456789')).toBe('Неправильно введен номер карты');
        expect(validateCardNumber('123456789123456789')).toBe('Неправильно введен номер карты');
        expect(validateCardNumber('ghgh1234567')).toBe('Неправильно введен номер карты');
        expect(validateCardNumber('впвпвп')).toBe('Неправильно введен номер карты');
        expect(validateCardNumber(',.1234')).toBe('Неправильно введен номер карты');
        expect(validateCardNumber('')).toBe('Неправильно введен номер карты');
    });
});

describe('Проверка валидатора cvv карты', () => {
    it('Валидатор cvv работает корректно при корректном вводе', () => {
        expect(validateCardCvv('123')).toBe('123');
    });

    it('Валидатор cvv работает корректно при неправильном вводе', () => {
        expect(validateCardCvv('12')).toBe('Неправильно введены данные');
        expect(validateCardCvv('1234')).toBe('Неправильно введены данные');
        expect(validateCardCvv('ghg')).toBe('Неправильно введены данные');
        expect(validateCardCvv('впв')).toBe('Неправильно введены данные');
        expect(validateCardCvv(',.')).toBe('Неправильно введены данные');
        expect(validateCardCvv('')).toBe('Неправильно введены данные');
        expect(validateCardCvv('1 2')).toBe('Неправильно введены данные');
    });
});
