import './sass/main.sass'

async function f() {
  await Promise.resolve('async')
  console.log('1')
  console.log('')
}
f()
