import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuestionCardComponent extends Component {
  @tracked isAnswered = false;
  @tracked isNotAnswered = true;

  /*
    Component arguments:
    @id: String,
    @correctAnswer: String,
    @question: String,
    @options: Array,
  */

  @action
  onClick(idName, selectedAnswer) {
    let { correctAnswer } = this.args;

    let selectedId = document.querySelector(`#${idName}`);
    this.isAnswered = true;
    this.isNotAnswered = false;

    if (correctAnswer === selectedAnswer) {
      selectedId.style.backgroundColor = 'var(--fir-3)';
    } else {
      selectedId.style.backgroundColor = 'var(--cherry-3)';
    }
  }
}
