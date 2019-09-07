
const ak = 'qBgWoDr0wkGUcFopSroXWFYluUtYVef1'

initMap = function () {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
  document.body.appendChild(script)
}

initMap()
