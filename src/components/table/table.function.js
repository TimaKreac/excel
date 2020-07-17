import {range} from '@core/utils'

export function shouldResize(event) {
  return event.target.dataset.resize
}
export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix($current, $target) {
  const current = $current.id(true)
  const target = $target.id(true)
  const cols = range(current.column, target.column)
  const rows = range(current.row, target.row)

  const ids = cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])

  return ids
}

export function nextSelector(key, {row, column}) {
  const MIN_VALUE = 1
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      column++
      break
    case 'ArrowLeft':
      column = column - 1 < MIN_VALUE ? MIN_VALUE : column - 1
      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }

  return `[data-id="${row}:${column}"]`
}
