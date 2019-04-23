exports.onRouteUpdate = ({ location, prevLocation }) => {
  const spoilers = document.querySelectorAll('.spoiler')

  const clickHandler = (e) => {
    const $spoiler = e.target
    $spoiler.style.color = '#FFF'
    $spoiler.removeEventListener('click', clickHandler)
  }

  spoilers.forEach($spoiler => {
    $spoiler.addEventListener('click', clickHandler)
  })
}