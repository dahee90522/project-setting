import { EpisodeModel, NaamezipModel } from 'Modules/model';
import { computed, observable } from 'mobx';

import NaamezipReviewModel from 'Modules/model/NaamezipReview';
import autobind from 'autobind-decorator';
import moment from 'moment';

/**
 * @namespace FullReviewModel
 */
export default class FullReviewModel {
  @observable
  launchingDate;
  @observable
  naamezipReview;
  @observable
  userName;
  @observable
  episode;
  @observable
  naamezip;

  constructor(value) {
    this.launchingDate = value?.launchingDate;
    this.naamezipReview = new NaamezipReviewModel(value?.naamezipReview);
    this.userName = value?.userName;
    this.episode = new EpisodeModel(value?.episode);
    this.naamezip = new NaamezipModel(value?.naamezip);
  }
}
