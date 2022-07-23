import { computed, observable } from 'mobx';

import moment from 'moment';

/**
 * @namespace PaginationModel
 */
export default class PaginationModel {
  @observable
  number;
  @observable
  size;
  @observable
  totalElements;
  @observable
  totalPages;
  constructor(value) {
    this.number = value?.number;
    this.size = value?.size;
    this.totalElements = value?.totalElements;
    this.totalPages = value?.totalPages;
  }
}
