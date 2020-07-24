import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | question data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('question', {
      type: 'questions',
      id: '013',
      attributes: {
        category: 'EmberCLI',
        difficulty: 'Medium',
        score: false,
        question: 'What build tool is used when running an Ember App?',
        'correct-answer': 'Broccoli',
        options: ['Babel', 'NPM', 'Cucumber', 'Broccoli']
      }
    });
    assert.equal(model.get('type'), 'questions');
    assert.equal(model.get('id'), '013');
    assert.equal(model.get('attributes.category'), 'EmberCLI');
    assert.equal(model.get('attributes.difficulty'), 'Medium');
    assert.equal(model.get('attributes.score'), false);
    assert.equal(
      model.get('attributes.question'),
      'What build tool is used when running an Ember App?'
    );
    assert.equal(model.get('attributes.correct-answer'), 'Broccoli');
    assert.equal(model.get('attributes.options.0'), 'Babel');
    assert.equal(model.get('attributes.options.1'), 'NPM');
    assert.equal(model.get('attributes.options.2'), 'Cucumber');
    assert.equal(model.get('attributes.options.3'), 'Broccoli');
  });
});
