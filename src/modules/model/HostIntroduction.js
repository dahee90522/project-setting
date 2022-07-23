import {
  descriptionPlaceholder,
  favoritePlaceholder,
  spaceIntroductionPlaceholder,
} from 'Modules/model/constants/hostIntroductionPlaceholders';

/**
 * @namespace HostIntroductionModel
 */
import { observable } from 'mobx';

export default class HostIntroductionModel {
  @observable
  description;
  @observable
  favorite;
  @observable
  spaceIntroduction;

  constructor(value) {
    // this.description = value?.description ?? descriptionPlaceholder;
    // this.favorite = value?.favorite ?? favoritePlaceholder;
    // this.spaceIntroduction =
    //   value?.spaceIntroduction ?? spaceIntroductionPlaceholder;
    this.description = value?.description;
    this.favorite = value?.favorite;
    this.spaceIntroduction = value?.spaceIntroduction;
  }
}
