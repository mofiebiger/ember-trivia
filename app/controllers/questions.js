import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class QuestionsController extends Controller {
  @tracked category = null;
  @tracked difficulty = null;
  @tracked model;
  @tracked question = [];
  @tracked score;
}
