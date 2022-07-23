import moment from 'moment';
/**
 * @namespace EpisodeScreeningModel
 */
import { observable } from 'mobx';

export default class EpisodeScreeningModel {
  @observable
  id;
  @observable
  episodeScreeningType;
  @observable
  reason;
  @observable
  createdAt;

  constructor(value) {
    this.id = value?.id;
    this.episodeScreeningType = value?.episodeScreeningType ?? value?.status;
    this.reason = value?.reason;
    this.createdAt = moment(value?.createdAt ?? value?.created_at);
  }
}
