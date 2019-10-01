var slideshow;

function jumpToNextSlide() {
  slideshow.gotoNextSlide()
}

function jumpToPreviousSlide() {
  slideshow.gotoPreviousSlide()
}

function setupRemark() {
  slideshow = remark.create({
    ratio: '4:3',
    highlightStyle: 'github',
    navigation: {
      scroll: false
    }
  })
  
  var mouseDebounce = 0
  var hideTimer = null

  function hideButtons() {
    document.querySelectorAll('.previousSlideButton, .nextSlideButton').forEach((item) => {
      item.classList.remove('appearAfterMouseMove')
    })
  }

  document.body.addEventListener('mousemove', function() {
    mouseDebounce += 1
    if (mouseDebounce == 10) {
      clearTimeout(hideTimer)
      document.querySelectorAll('.previousSlideButton, .nextSlideButton').forEach((item) => {
        item.classList.add('appearAfterMouseMove')
      })
      hideTimer = setTimeout(hideButtons, 10000)
      mouseDebounce = 0
    }
  })
}