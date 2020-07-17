import {DomListener} from '@core/DomListener'
export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubs = []

    this.prepare()
  }

  // настройка компонента до инита
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // подписка на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }
  destroy() {
    this.removeDOMListeners()
    this.unsubs.forEach(unsub => unsub())
  }
}
