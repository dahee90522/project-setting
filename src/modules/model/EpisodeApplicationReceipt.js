import moment from 'moment';

export default class EpisodeApplicationReceiptModel {
  id;
  episodeApplicationReceiptStatus;
  paidPrice;
  refundPrice;
  productName;
  createdAt;

  constructor(value) {
    this.id = value.id;
    this.createdAt = moment(value.createdAt ?? value?.created_at);
    this.episodeApplicationReceiptStatus = value.episodeApplicationReceiptStatus ?? value?.status;
    this.paidPrice = value.paidPrice ?? value?.paid_price;
    this.refundPrice = value.refundPrice ?? value?.refund_price;
    this.productName = value.productName;
  }
}
