import {Component} from '@core/Component'
export class Formula extends Component {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  static className = 'excel__formula'

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(e) {
    console.log(this.$root)
  }
  onClick(e) {
    console.log(this.$root)
  }
}
