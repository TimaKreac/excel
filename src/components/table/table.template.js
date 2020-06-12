const CODES = {
  A: 65,
  Z: 90,
}

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">
      ${col}
    </div>
  `
}

function createRow(content = '', index = '') {
  return `
    <div class="row">
      <div class="row-info">${index}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(cells, i))
  }

  return rows.join('')
}
