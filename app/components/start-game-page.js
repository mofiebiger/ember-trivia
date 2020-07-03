import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StartGamePageComponent extends Component {
  @tracked reload = location.reload();
}
