const COORDS = 'coords';

// 네비게이터

// 날씨 로드
function loadCoords () {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadCoords === null) {
    askForCoords();
  }

}

function init() {
  loadCoords();
}

init();