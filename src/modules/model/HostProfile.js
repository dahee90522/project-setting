import { EpisodeModel, HostInformationModel, HostModel, NaamezipModel } from 'Modules/model';
import { computed, observable } from 'mobx';

import autobind from 'autobind-decorator';
import moment from 'moment';

/**
 * @namespace HostProfileModel
 */
export default class HostProfileModel {
  @observable
  appliedGuestCount;
  @observable
  visitedGuestCount;
  @observable
  reviewCount;
  @observable
  agreeHostPolicy;
  @observable
  description;
  @observable
  nickName;
  @observable
  profileImage;

  constructor(value) {
    this.appliedGuestCount = value?.appliedGuestCount ?? value?.applied_guest_count;
    this.visitedGuestCount = value?.visitedGuestCount ?? value?.visited_guest_count;
    this.reviewCount = value?.reviewCount ?? value?.reviews.length;
    this.agreeHostPolicy = value?.agree_host_policy;
    this.description = value?.description;
    this.nickName = value?.nick_name;
    this.profileImage = value?.profile_image;
  }
}
