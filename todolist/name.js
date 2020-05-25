const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const name = document.querySelector('.js-name');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function paintName(text) {
  form.classList.remove(SHOWING_CN);
  name.classList.add(SHOWING_CN);
  name.innerText = `Hello ${text}`;
}

function localStorge() {
  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser === null) {
    // 없을때
  }else {
    paintName(currentUser); //있을때
  }
} 
// 로컬 스트로지에서 값을 받아오기

function init() {
  localStorge();
}
init();