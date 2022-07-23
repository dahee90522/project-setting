import moment from 'moment';
/**
 * @namespace HostModel
 */
import { observable } from 'mobx';

export default class HostModel {
  @observable
  id;
  @observable
  name;
  @observable
  email;
  @observable
  description;
  @observable
  createdAt;
  @observable
  phoneNumber;

  constructor(value) {
    this.id = value?.id;
    this.name = value?.name;
    this.email = value?.email;
    this.description = value?.description;
    this.createdAt = value?.createdAt;
    this.phoneNumber = value?.phone_number;
  }
}
