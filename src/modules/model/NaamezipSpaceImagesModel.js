/**
 * @namespace NaamezipSpaceImagesModel
 */
import { observable } from 'mobx';

export default class NaamezipSpaceImagesModel {
  @observable
  id;
  @observable
  image;
  @observable
  sequence;

  constructor(value) {
    this.id = value?.id ?? Math.random().toString();
    this.image = value.image ?? value?.image_url;
    this.sequence = value.sequence;
  }
}
