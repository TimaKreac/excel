import {$} from '@core/dom.js'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  const sideProp = type === 'column' ? 'bottom' : 'right'
  let value

  $resizer.css({
    opacity: 1,
    [sideProp]: '-100px',
  })

  document.onmousemove = e => {
    if (type === 'column') {
      const delta = Math.floor(e.pageX - coords.right)
      value = coords.width + delta + 'px'
      $resizer.css({
        right: -delta + 'px',
      })
    } else {
      const delta = Math.floor(e.pageY - coords.bottom)
      value = coords.height + delta + 'px'
      $resizer.css({
        bottom: -delta + 'px',
      })
    }
  }

  document.onmouseup = e => {
    document.onmousemove = null
    document.onmouseup = null
    $resizer.css({
      opacity: 0,
      right: 0,
      bottom: 0,
    })
    if (type === 'column') {
      $parent.css({width: value})
      $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => {
            el.style.width = value
          })
    } else {
      $parent.css({height: value})
    }
  }
}
