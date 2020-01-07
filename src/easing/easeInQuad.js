import { easeInOutBack } from 'js-easing-functions'

const elemToAnimate = document.querySelector('#element')
const duration = 2000
const startPosition = 0
const endPosition = 100
let startTime
function tick () {
  const elapsed = Date.now() - startTime
  elemToAnimate.transform = `translateY(${easeInOutBack(elapsed, startPosition, endPosition, duration)}px)`
  if (elapsed < duration) {
    requestAnimationFrame(tick)
  }
}
function animate () {
  startTime = Date.now()
  tick()
}
animate()
