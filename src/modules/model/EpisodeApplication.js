import moment from 'moment';

export default class EpisodeApplicationModel {
  id;
  createdAt;
  episodeApplicationStatus;
  updatedAt;

  constructor(value) {
    this.id = value.id;
    this.createdAt = moment(value?.createdAt ?? value?.created_at);
    this.updatedAt = moment(value?.updatedAt ?? value?.updated_at);
    this.episodeApplicationStatus =
      value?.episodeApplicationStatus ?? value?.episode_application_status;
    this.episodeId = value?.episode_id;
    this.naamezipId = value?.naamezip_id;
    this.userId = value?.user_id;
  }
}
