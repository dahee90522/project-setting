/**
 * @namespace EventOrderModel
 */
import { observable } from 'mobx';

export default class EventOrderModel {
  @observable
  id;
  @observable
  sequence;
  @observable
  title;
  @observable
  description;

  constructor(value) {
    this.id = value?.id ?? Math.random().toString();
    this.sequence = value.sequence;
    this.title = value.title ?? '';
    this.description = value.description ?? '';
  }
}
