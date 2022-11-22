/// <reference types="cypress" />

describe('Тестируем Credit Card', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/credit_card1/');
  });

  it('Ввод корректных данных', () => {
    const number = '1234567891234567';
    const holder = 'Petrov Ivan';
    const date = '2222';
    const cvv = '123';
    cy.get('input[name="holder"]').type(holder);
    cy.get('input[name="card-num"]').type(number);
    cy.get('input[name="date"]').type(date);
    cy.get('input[name="cvv"]').type(cvv);


    cy.get('.card__number').should('have.text', '1234 5678 9123 4567 ');
    cy.get('.card__name').should('have.text', 'PETROV IVAN');
    cy.get('.card__date').should('have.text', '22/22');

    cy.get('form').get('[type="submit"]').click();
    cy.get('h2').should('have.text', 'Данные карты валидны');
  });


  it('Ввод некорректного имени', () => {
    cy.get('input[name="holder"]').type('Петров Ivan1');
    cy.get('input[name="card-num"]').type('1234567891234567');
    cy.get('input[name="date"]').type('2222');
    cy.get('input[name="cvv"]').type('123');

    cy.get('.card__number').should('have.text', '1234 5678 9123 4567 ');
    cy.get('.card__name').should('have.text', 'ПЕТРОВ IVAN1');
    cy.get('.card__date').should('have.text', '22/22');

    cy.get('form').get('[type="submit"]').click();
    cy.get('h2').should('have.text', 'Данные карты не валидны')
  });


  it('Ввод некорректного номера карты', () => {
    cy.get('input[name="holder"]').type('Petrov Ivan');
    cy.get('input[name="card-num"]').type('12345678912345');
    cy.get('input[name="date"]').type('2222');
    cy.get('input[name="cvv"]').type('123');

    cy.get('.card__number').should('have.text', '1234 5678 9123 45');
    cy.get('.card__name').should('have.text', 'PETROV IVAN');
    cy.get('.card__date').should('have.text', '22/22');

    cy.get('form').get('[type="submit"]').click();
    cy.get('h2').should('have.text', 'Данные карты не валидны')
  });

  it('Ввод некорректного cvv', () => {
    cy.get('input[name="holder"]').type('Petrov Ivan');
    cy.get('input[name="card-num"]').type('1234567891234567');
    cy.get('input[name="date"]').type('2222');
    cy.get('input[name="cvv"]').type('1 2');

    cy.get('.card__number').should('have.text', '1234 5678 9123 4567 ');
    cy.get('.card__name').should('have.text', 'PETROV IVAN');
    cy.get('.card__date').should('have.text', '22/22');

    cy.get('form').get('[type="submit"]').click();
    cy.get('h2').should('have.text', 'Данные карты не валидны')
  });
});