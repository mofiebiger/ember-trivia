import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | display-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<DisplayBox />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <DisplayBox>
        can insert template block text
      </DisplayBox>
    `);

    assert.equal(
      this.element.textContent.trim(),
      'can insert template block text'
    );

    // Takes text parameter:
    await render(hbs`<DisplayBox
      @text="Hello Universe!!!"
      />`);

    assert.equal(this.element.textContent.trim(), 'Hello Universe!!!');
  });
});
