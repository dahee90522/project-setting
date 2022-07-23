import { computed, observable } from 'mobx';

import { EventOrderModel } from 'Modules/model';
import autobind from 'autobind-decorator';
import moment from 'moment';

/**
 * @namespace EpisodeModel
 */
export default class EpisodeModel {
  @observable
  id;
  @observable
  title;
  @observable
  permitted;
  @observable
  episodeStatus;
  @observable
  description;
  @observable
  launchingDate; // 남의집 날짜/시간
  @observable
  recruitmentCount;
  @observable
  participationCount;
  @observable
  applicationDeadline;
  @observable
  price;
  @observable
  questionAvailable;
  @observable
  notificationDate; // 결과 알림일/시간
  @observable
  preparationThings;
  @observable
  parkingAvailable;
  @observable
  hashTags;
  @observable
  episodeQuestions;
  @observable
  completeToComposeDate;
  @observable
  submitDate;
  @observable
  copiedFromExistedNaamezip;
  @observable
  serveThings;
  @observable
  duration;
  @observable
  desiredGuest;
  @observable
  updatedAt;
  @observable
  createdAt;
  @observable
  settlementRatio;
  @observable
  hostId;

  constructor(value) {
    this.id = value?.id;
    this.title = value?.title ?? '';
    this.permitted = value?.permitted;
    this.episodeStatus = value?.episodeStatus ?? value?.episode_status;
    this.description = value?.description;
    this.serveThings = value?.serveThings??value?.serve_things;
    this.duration = value?.duration;
    this.desiredGuest = value?.desiredGuest ?? value?.desired_guest;
    this.launchingDate = value?.launchingDate
      ? new moment(value?.launchingDate)
      : value?.launching_date
      ? new moment(value?.launching_date)
      : new moment();
    if (value?.recruitmentCount === 0 || value?.recruitment_count === 0) {
      this.recruitmentCount = 2;
    } else {
      this.recruitmentCount = value?.recruitmentCount ?? value?.recruitment_count;
    }
    this.applicationDeadline = value?.applicationDeadline
      ? new moment(value?.applicationDeadline)
      : value?.application_deadline
      ? new moment(value?.application_deadline)
      : new moment();
    if (value?.price === 0) {
      this.price = 20000;
    } else {
      this.price = value?.price;
    }
    this.questionAvailable = value?.questionAvailable;
    this.participationCount = value?.participationCount;
    this.applicationCount = value?.application_count;
    this.notificationDate = value?.notificationDate
      ? new moment(value?.notificationDate)
      : value?.notification_date
      ? new moment(value?.notification_date)
      : new moment();
    this.preparationThings = value?.preparationThings ?? value?.preparation_things;
    this.parkingAvailable = value?.parkingAvailable ?? value?.parking_available;
    this.hashTags = value?.hashTags ?? [];
    this.episodeQuestions = (value?.episodeQuestions ?? []).map(
      (question) => new EpisodeQuestionsModel(question),
    );
    this.completeToComposeDate = value?.completeToComposeDate
      ? new moment(value?.completeToComposeDate)
      : null;
    this.submitDate = value?.submitDate ? new moment(value?.submitDate) : null;
    if (this.episodeQuestions.length === 0) {
      this.episodeQuestions = [
        new EpisodeQuestionsModel({
          question: '하시는 일/공부가 궁금해요~',
          necessary: true,
          isDefault: true,
        }),
        new EpisodeQuestionsModel({
          question:
            '신청동기가 무엇인가요? (동행자가 있다면 이름을 적어주세요 / 동행자도 방문신청 필수)',
          necessary: true,
          isDefault: true,
        }),
        new EpisodeQuestionsModel({
          question:
            '보다 건강한 남의집 진행을 위해 코로나19 백신 접종일과 접종차수를 남겨주세요. 예시) 2021.12.25 / 2차접종',
          necessary: true,
          isDefault: true,
        }),
        new EpisodeQuestionsModel({
          question: '운영하는 블로그 혹은 SNS 계정이 있다면 공유해 주세요.',
          necessary: false,
          isDefault: true,
        }),
      ];
    }
    this.copiedFromExistedNaamezip = value?.copiedFromExistedNaamezip ?? false;
    this.updatedAt = value?.updatedAt ?? value?.updated_at;
    this.createdAt = value?.created_at;
    this.settlementRatio = value?.settlement_ratio;
    this.hostId = value?.user_id;
    this.eventOrders = value?.naamezip_programs?.map((order) => new EventOrderModel(order));
  }
  /**
   * @description 한글화된 에피소드 상태
   * @returns {string}
   */
  @computed
  get episodeStatusDescription() {
    switch (this.episodeStatus) {
      case 'BEFORE_LAUNCH':
        return '모임 시작 전(모집중)';
      case 'FULLY_BOOKED':
        return '모집 마감';
      case 'FINISHED':
        return '모임 종료';
      case 'ETC':
        return '';
    }
  }

  @computed
  get notificationYearMonthDate() {
    return this.notificationDate.format('YYYY-MM-DD');
  }
  @autobind
  setNotificationYearMonthDate(time) {
    const date = new moment(time);
    const newDate = new moment(this.notificationDate);
    newDate.year(date.year());
    newDate.month(date.month());
    newDate.date(date.date());
    this.notificationDate = newDate;
  }
  @autobind
  setNotificationHourMinute(time) {
    const newDate = new moment(this.notificationDate);
    newDate.hour(time.split(':')[0]);
    newDate.minutes(time.split(':')[1]);
    this.notificationDate = newDate;
  }

  @computed
  get notificationHourMinute() {
    return this.notificationDate.format('HH:mm:00');
  }

  @computed
  get launchingYearMonthDate() {
    return this.launchingDate.format('YYYY-MM-DD');
  }

  @computed
  get launchingHourMinute() {
    return this.launchingDate.format('HH:mm:00');
  }
  @autobind
  setLaunchingYearMonthDate(time) {
    const date = new moment(time);
    const newDate = new moment(this.launchingDate);
    newDate.year(date.year());
    newDate.month(date.month());
    newDate.date(date.date());
    this.launchingDate = newDate;
  }
  @autobind
  setLaunchingHourMinute(time) {
    const newDate = new moment(this.launchingDate);
    newDate.hour(time.split(':')[0]);
    newDate.minutes(time.split(':')[1]);
    this.launchingDate = newDate;
  }
}

/**
 * @namespace EpisodeQuestionsModel
 */
export class EpisodeQuestionsModel {
  @observable
  id;
  @observable
  sequence;
  @observable
  question;
  @observable
  necessary;
  @observable
  naamezipId;
  @observable
  episodeId;
  @observable
  isDefault;
  constructor(value) {
    this.id = value?.id;
    this.sequence = value?.sequence;
    this.question = value?.question;
    this.necessary = value?.necessary;
    this.naamezipId = value?.naamezipId;
    this.episodeId = value?.episodeId;
    this.isDefault = value?.isDefault;
  }
}
