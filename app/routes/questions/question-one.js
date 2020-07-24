import Route from '@ember/routing/route';

export default class QuestionsQuestionOneRoute extends Route {
  model() {
    let data = this.modelFor('questions');
    return data[0];
  }
}
