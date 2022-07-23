import moment from 'moment';
import { observable } from 'mobx';

export default class PartnerSpace {
  @observable
  id;
  @observable
  title;
  @observable
  address;
  @observable
  coverImage;
  @observable
  description;
  @observable
  gps;
  @observable
  schedules;
  @observable
  permitted;

  constructor(value) {
    this.id = value?.id;
    this.title = value?.title;
    this.address = value?.address;
    this.coverImage = value?.coverImage;
    this.description = value?.description;
    this.gps = value?.gps ? new Gps(value.gps) : null;
    this.schedules = (value?.schedules || []).map((schedule) => new Schedule(schedule));
    this.permitted = value?.permitted;
  }
}

class Gps {
  @observable
  lat;
  @observable
  lng;
  constructor(value) {
    this.lat = value.lat;
    this.lng = value.lng;
  }
}

class Schedule {
  @observable
  id;
  @observable
  episodeId;
  @observable
  episodeTitle;
  @observable
  launchingDate;
  @observable
  createdAt;
  constructor(value) {
    this.id = value.id;
    this.episodeId = value.episodeId;
    this.launchingDate = moment(value.launchingDate);
    this.episodeTitle = value.episodeTitle;
  }
}
