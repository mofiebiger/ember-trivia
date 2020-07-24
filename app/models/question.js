import Model, { attr } from '@ember-data/model';

export default class QuestionDataModel extends Model {
  @attr category;
  @attr difficulty;
  @attr question;
  @attr correct_answer;
  @attr options;
  @attr question_type;
  @attr score;
}
