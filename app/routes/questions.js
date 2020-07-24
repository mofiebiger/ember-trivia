import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestionsRoute extends Route {
  @service store;

  async model(params) {
    let questions = await this.store.findAll('question');
    let filteredQuestions = questions.filter(function(question) {
      return (
        question.difficulty == params.difficulty &&
        question.category == params.category
      );
    });

    return filteredQuestions;
  }
}
