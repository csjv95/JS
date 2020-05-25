const clock = document.querySelector('.js-clock');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}`: `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;} // 삼항 현산자를 이용해서 10보다 작으면 0을 넣어준다

function init(){
  getTime();
  setInterval(getTime,1000); //setInterval(fn,seconds) 얼마의 간격을 두고 함수를 실행 할때 사용
}
init();