import { computed, observable } from 'mobx';
/**
 * @namespace CollectionModel
 * @property {number}  id
 * @property {string}  cardNumber
 * @property {string}  cardName
 */

class CollectionModel {
  @observable
  id;
  cardNumber;
  cardName;

  constructor(value) {
    this.id = value?.id;
    this.title = value?.title;
    this.collectionType = value.collection_type;
    this.description = value?.description;
    this.mobileImageUrl = value?.header_image?.mobile_image_url;
    this.pcImageUrl = value?.header_image?.pc_image_url;
    this.thumbnaiImageUrl = value?.header_image?.thumbnail_image_url;
  }
}

export default CollectionModel;
