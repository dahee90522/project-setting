import { computed, observable } from 'mobx';
/**
 * @namespace CreditCardModel
 * @property {number}  id
 * @property {string}  cardNumber
 * @property {string}  cardName
 */

class CreditCardModel {
  @observable
  id;
  cardNumber;
  cardName;

  constructor(value) {
    this.id = value.id;
    this.cardNumber = value?.cardNumber ?? value?.card_number;
    this.cardName = value?.cardName ?? value?.card_name;
  }
}

export default CreditCardModel;
