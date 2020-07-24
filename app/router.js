import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('start-game', { path: '/' });
  this.route('start-game', { path: '/start_game' });

  this.route(
    'questions',
    { path: '/question/category/:category/difficulty/:difficulty' },
    function() {
      this.route('question-one', { path: '/Q1' });
      this.route('question-two', { path: '/Q2' });
      this.route('question-three', { path: '/Q3' });
    }
  );
});
