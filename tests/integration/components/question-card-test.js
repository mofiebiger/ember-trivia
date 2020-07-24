import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | question-card', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(async function() {
    this.set('model', {
      type: 'questions',
      id: '013',
      attributes: {
        category: 'EmberCLI',
        difficulty: 'Medium',
        score: false,
        question: 'What build tool is used when running an Ember App?',
        correct_answer: 'Broccoli',
        options: ['Babel', 'NPM', 'Cucumber', 'Broccoli']
      }
    });

    await render(hbs`
      <QuestionCard
        @id={{this.model.id}}
        @question={{this.model.attributes.question}}
        @correctAnswer={{this.model.attributes.correct_answer}}
        @options={{this.model.attributes.options}}
        @score={{this.model.attributes.score}}
        @buttonText="Next Question"
        @route="questions.question-two"
      />
    `);
  });

  test('it renders if model is given', async function(assert) {
    assert
      .dom('[data-test-header-text]')
      .hasText(
        'What build tool is used when running an Ember App?',
        'The question header is rendered properly'
      );

    assert
      .dom('[data-test-question-one]')
      .hasText('Babel', 'The answer buttons render properly');
  });

  test('the style updates if selected answer is correct', async function(assert) {
    assert
      .dom('[data-test-question-four]')
      .hasStyle(
        { 'background-color': 'rgb(127, 205, 233)' },
        'The default button color is blue'
      );

    await click('[data-test-question-four]');

    assert
      .dom('[data-test-question-four]')
      .hasStyle(
        { 'background-color': 'rgb(46, 204, 113)' },
        'The answer button turns green if correct'
      );
  });

  test('the style updates if selected answer is in-correct', async function(assert) {
    assert
      .dom('[data-test-question-four]')
      .hasStyle(
        { 'background-color': 'rgb(127, 205, 233)' },
        'The default button color is blue'
      );

    await click('[data-test-question-two]');

    assert
      .dom('[data-test-question-two]')
      .hasStyle(
        { 'background-color': 'rgb(231, 76, 60)' },
        'The answer button turns green if correct'
      );
  });
});
