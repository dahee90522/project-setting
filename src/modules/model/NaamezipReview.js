import { computed, observable } from 'mobx';

import moment from 'moment';

/**
 * @namespace NaamezipReviewModel
 */

class NaamezipReviewModel {
  @observable
  id;
  @observable
  description;
  @observable
  createdAt;
  deleted;
  @observable
  naamezipId;
  @observable
  episodeId;
  @observable
  userId;
  @observable
  maskingName;

  constructor(value) {
    this.id = value?.id;
    this.description = value?.description;
    this.createdAt = moment(value?.createdAt ?? value?.created_at);
    this.deleted = value?.deleted;
    this.naamezipId = value?.naamezip_id;
    this.episodeId = value?.episode_id;
    this.userId = value?.user_id;
    this.maskingName = value?.user?.masked_name;
  }
}

export default NaamezipReviewModel;
