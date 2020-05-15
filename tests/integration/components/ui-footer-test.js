import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders two text inputs', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiFooter
                        @start='My'
                        @end=' Footer'
                      />`);

    assert.dom('[data-test-footer-text]').exists();
    assert.dom('[data-test-footer-text]').hasText('My Footer');
  });

  test('it renders images', async function (assert) {
    await render(hbs`<UiFooter
                        @src='../assets/ember-trivia-logo.png'
                        @alt='Ember Trivia Logo'/>`);

    assert.dom('[data-test-footer-img]').exists();
    assert.dom('[data-test-footer-img]').hasAttribute('src');
    assert.dom('[data-test-footer-img]').hasAttribute('alt');
  });
});
