import Route from '@ember/routing/route';

export default class QuestionsQuestionThreeRoute extends Route {
  model() {
    let data = this.modelFor('questions');
    return data[2];
  }
}
