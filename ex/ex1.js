const titile = document.querySelector('.title');

function clickEvent() {
  const REALCOLOR =  titile.style.color;
  if(REALCOLOR === 'olive') {
    titile.style.color = 'yellow';
  }else {
    titile.style.color = 'olive';
  }
}

titile.addEventListener('click',clickEvent);

