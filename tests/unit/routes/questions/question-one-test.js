import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | questions/question-one', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:questions/question-one');
    assert.ok(route);
  });
});
