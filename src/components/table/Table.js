import {Component} from '@core/Component'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {shouldResize} from './table.function'

export class Table extends Component {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
