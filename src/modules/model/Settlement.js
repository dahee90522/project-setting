import { computed, observable } from 'mobx';

import moment from 'moment';

/**
 * @namespace SettlementModel
 * @property {number}  id
 * @property {number}  recruitmentCount
 * @property {number}  participationCount
 * @property {number}  income
 * @property {number}  createdAt
 */

export default class SettlementModel {
  @observable
  id;
  recruitmentCount;
  participationCount;
  income;
  settlementRatio;
  episodePrice;
  hostPortion;
  createdAt;

  constructor(value) {
    this.id = value?.id;
    this.recruitmentCount = value?.recruitmentCount;
    this.participationCount = value?.participationCount ?? value?.participation_count;
    this.income = value?.income ?? value?.total_price;
    this.settlementRatio = value?.settlementRatio ?? value?.settlement_ratio;
    this.episodePrice = value?.episodePrice;
    this.hostPortion = value?.hostPortion ?? value?.host_portion;
    this.createdAt = new moment(value?.createdAt ?? value?.created_at);
  }
}
