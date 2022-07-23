/**
 * @namespace HostInformationModel
 */

import { observable } from 'mobx';

export default class HostInformationModel {
  @observable
  id;
  @observable
  hostId;
  @observable
  description;
  @observable
  nickName;
  @observable
  profileImage;
  @observable
  agreeForHostPolicy;

  constructor(value) {
    this.id = value?.id;
    this.hostId = value?.hostId;
    this.description = value?.description;
    this.nickName = value?.nickName ?? value?.nick_name;
    this.profileImage = value?.profileImage ?? value?.profile_image;
    this.agreeForHostPolicy = value?.agreeForHostPolicy ?? value?.agree_host_policy;
  }
}
