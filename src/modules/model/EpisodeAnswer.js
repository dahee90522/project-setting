export default class EpisodeAnswerModel {
  id;
  answer;

  constructor(value) {
    this.id = value.id;
    this.answer = value.answer;
  }
}
