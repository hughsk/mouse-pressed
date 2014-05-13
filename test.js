var mouse = require('./')(null, true)

document.body.innerHTML = 'open your console :)'

mouse.on('down', update)
mouse.on('up', update)

function update() {
  console.clear()
  console.log('')
  console.log('left:', mouse.left)
  console.log('right:', mouse.right)
  console.log('middle:', mouse.middle)
  console.log('')
}
