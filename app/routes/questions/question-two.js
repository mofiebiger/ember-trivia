import Route from '@ember/routing/route';

export default class QuestionsQuestionTwoRoute extends Route {
  model() {
    let data = this.modelFor('questions');
    return data[1];
  }
}
