import { NaamezipSpaceImagesModel } from 'Modules/model';
/**
 * @namespace NaamezipModel
 */
import { observable } from 'mobx';
export default class NaamezipModel {
  @observable
  id;
  @observable
  naamezipType;
  @observable
  title;
  @observable
  description;
  @observable
  launchingDate;
  @observable
  address;
  @observable
  roughAddress;
  @observable
  roughGpsLat;
  @observable
  roughGpsLng;
  @observable
  coverImage;
  @observable
  hostOwn;
  @observable
  spaceIntroduction;
  @observable
  createdAt;
  @observable
  specificAddress = '';
  @observable
  naamezipSpaceImages;

  constructor(value) {
    this.id = value?.id;
    this.naamezipType = value?.naamezipType ?? value?.naamezip_type;
    this.title = value?.title;
    this.address = value?.address ?? value?.display_address ?? value?.naamezip_space?.address;
    this.description = value?.description;
    this.roughGpsLat =
      value?.roughGpsLat ?? value?.rough_gps_lat ?? value?.naamezip_space?.rough_gps_lat;
    this.roughGpsLng =
      value?.roughGpsLng ?? value?.rough_gps_lng ?? value?.naamezip_space?.rough_gps_lng;
    this.coverImage = value?.coverImage ?? value?.cover_image_url;
    this.createdAt = value?.createdAt ?? value?.created_at;
    this.hostOwn = value?.hostOwn;
    this.spaceIntroduction =
      value?.spaceIntroduction === null ? '' : value?.naamezip_space?.description;
    this.roughAddress =
      value?.roughAddress ?? value?.rough_address ?? value?.naamezip_space?.rough_address;
    this.hostId = value?.user_id;

    this.naamezipSpaceImages = (value?.naamezipSpaceImages ?? value?.space_images ?? [])?.map(
      (images) => new NaamezipSpaceImagesModel(images),
    );
  }
  /**
   * @description 남의집 타입 한글화
   * @returns {string}
   */
  get naamezipTypeDescription() {
    switch (this.naamezipType) {
      case 'MEETUP':
        return '모모임';
      case 'LIBRARY':
        return '서재';
      case 'OVERSEAS':
        return '해외';
      case 'ETC':
        return '기타';
    }
  }

  get naamezipGPS() {
    return {
      lat: !this.roughGpsLat || this.roughGpsLat === '' ? 37.4002324 : this.roughGpsLat,
      lng: !this.roughGpsLng || this.roughGpsLng === '' ? 127.1044317 : this.roughGpsLng,
    };
  }
}
