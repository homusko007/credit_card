import { el, setChildren } from '../node_modules/redom/dist/redom.es.js';

const setCardPage = () => {

  const cardNumber = el('span', { className: 'card__number' }, 'xxxx xxxx xxxx xxxx');
  const cardName = el('span', { className: 'card__name' }, 'Name');
  const cardDate = el('span', { className: 'card__date' }, '__ /__');
  const cardPersonal = el('div', { className: 'card__personal' }, cardName, cardDate);
  const creditCard = el('div', { className: 'credit-card' }, cardNumber, cardPersonal);

  const inputHolderWrap = el('div', { className: 'form__input-wrap form__input-wrap_holder' },
    [el('label', { className: 'form__label form__holder-label' }, 'Card Holder'), el('input', {
      className: 'input input__holder',
      type: "text",
      oninput(event) {
        this.value = this.value.replace(/[^a-z ]/i, '');
        cardName.textContent = this.value.toUpperCase();
      }
    })]);


  const inputcardNumberWrap = el('div', { className: 'form__input-wrap form__input-wrap_number' },
    [el('label', { className: 'form__label form__number-label' }, 'Card Number'), el('input', {
      className: 'input input__number',
      id: "cardNumber",
      oninput(event) {
        this.value = this.value.replace(/[^\d]/g, '').substring(0, 16);
        this.value = this.value != '' ? this.value.match(/.{1,4}/g).join(' ') : '';
        cardNumber.textContent = this.value;
      }
    })]);

  const inputDateWrap = el('div', { className: 'form__input-wrap form__input-wrap_date' },
    [el('label', { className: 'form__label form__date-label' }, 'Card Expiry'), el('input', {
      className: 'input input__date',
      type: "text",
      oninput(event) {
        this.value = this.value.replace(/[^\d]/g, '').substring(0, 4);
        this.value = this.value != '/' ? this.value.match(/.{1,2}/g).join('/') : '/';
        cardDate.textContent = this.value;
      }
    })]);

  const inputCvv = el('div', { className: 'form__input-wrap form__input-wrap_cvv' },
    [el('label', { className: 'form__label form__cvv-label' }, 'CVV'),
    el('input', {
      className: 'input input__cvv',
      type: "text",
      oninput(event) {
        this.value = this.value.replace(/[^\d]/g, '').substring(0, 3);
      }
    })]);

    const button = el('button', {className: 'form__button'}, 'CHECK OUT');
  const form = el('form', {
    className: 'form',
    action: "#",
    id: "form"
  }, inputHolderWrap, inputcardNumberWrap, inputDateWrap, inputCvv, button);

  const card = el('div', { className: 'card' }, [el('p', { className: 'secure' }, 'Secure Checkout'), creditCard, form]);

  return el('div', { className: 'wrapper' }, card)
}

setChildren(document.body, setCardPage());
