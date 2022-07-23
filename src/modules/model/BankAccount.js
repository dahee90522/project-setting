/**
 * @namespace BankAccountModel
 */
import { computed, observable } from 'mobx';

export default class BankAccountModel {
  @observable
  id;
  @observable
  bankName;
  @observable
  accountNumber;
  @observable
  socialNumber;

  constructor(value = {}) {
    this.id = value.id;
    this.bankName = value?.bankName ?? value?.bank_name;
    this.accountNumber = value?.accountNumber ?? value?.account_number;
    this.socialNumber = value?.socialNumber ?? value?.social_number;
  }

  @computed
  get saveAvailable() {
    return (
      this.bankName &&
      this.bankName !== '' &&
      this.accountNumber &&
      this.accountNumber !== '' &&
      this.socialNumber &&
      this.socialNumber !== ''
    );
  }
}
