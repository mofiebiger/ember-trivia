import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import {
  selectChoose,
  clickTrigger
} from 'ember-power-select/test-support/helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | start-game-page', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders category dropdown', async function(assert) {
    await render(hbs`<StartGamePage />`);

    assert.dom('[data-test-select-category]').exists();
    assert.dom('[data-test-select-category]').hasText('Select category');

    await clickTrigger('[data-test-select-category]');
    await selectChoose('[data-test-select-category]', 'EmberJS');

    assert.equal(
      this.element
        .querySelector(
          '[data-test-select-category] .ember-power-select-selected-item'
        )
        .textContent.trim(),
      'EmberJS',
      'Render with selected category'
    );
  });
  test('it renders difficulty dropdown', async function(assert) {
    await render(hbs`<StartGamePage />`);

    assert.dom('[data-test-select-difficulty]').exists();
    assert.dom('[data-test-select-difficulty]').hasText('Select difficulty');

    await clickTrigger('[data-test-select-difficulty]');
    await selectChoose('[data-test-select-difficulty]', 'Hard');

    assert.equal(
      this.element
        .querySelector(
          '[data-test-select-difficulty] .ember-power-select-selected-item'
        )
        .textContent.trim(),
      'Hard',
      'Render with selected difficulty'
    );
  });
  test('it renders play button', async function(assert) {
    await render(hbs`<StartGamePage />`);
    assert.dom('[data-test-play-button]').exists();
  });
});
