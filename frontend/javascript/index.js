import "remark/src/remark";
import "../styles/index.css";

let touchDevice = false
let mouseDebounce = 0
let hideTimer = null

if (document.querySelector("textarea#source")) {
  const slideshow = window.remark.create({
    ratio: '9:6',
    highlightStyle: 'github',
    navigation: {
      scroll: false
    }
  })

  document.querySelector(".previousSlideButton").addEventListener("click", () => {
    if (!touchDevice) {
      slideshow.gotoPreviousSlide()
    }
  })
  document.querySelector(".nextSlideButton").addEventListener("click", () => {
    if (!touchDevice) {
      slideshow.gotoNextSlide()
    }
  })

  const hideButtons = () => {
    document.querySelectorAll('.previousSlideButton, .nextSlideButton').forEach((item) => {
      item.classList.remove('appearAfterMouseMove')
    })
  }

  document.body.addEventListener('touchstart', function() {
    touchDevice = true
  })


  document.body.addEventListener('mousemove', function() {
    if (touchDevice) {
      return
    }
    mouseDebounce += 1
    if (mouseDebounce == 10) {
      clearTimeout(hideTimer)
      document.querySelectorAll('.previousSlideButton, .nextSlideButton').forEach((item) => {
        item.classList.add('appearAfterMouseMove')
      })
      hideTimer = setTimeout(hideButtons, 6000)
      mouseDebounce = 0
    }
  })
}