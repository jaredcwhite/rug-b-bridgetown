import "remark/src/remark";
import "../styles/index.css";

var slideshow;
var touchDevice = false;

if (document.querySelector("textarea#source")) {
  slideshow = window.remark.create({
    ratio: '9:6',
    highlightStyle: 'github',
    navigation: {
      scroll: false
    }
  })

  document.querySelector(".previousSlideButton").addEventListener("click", () => { slideshow.gotoPreviousSlide() })
  document.querySelector(".nextSlideButton").addEventListener("click", () => { slideshow.gotoNextSlide() })

  var mouseDebounce = 0
  var hideTimer = null

  const hideButtons = () => {
    document.querySelectorAll('.previousSlideButton, .nextSlideButton').forEach((item) => {
      item.classList.remove('appearAfterMouseMove')
    })
  }

  document.body.addEventListener('touchend', function() {
    touchDevice = true
  })


  document.body.addEventListener('mousemove', function() {
    if (touchDevice) {
      return;
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