const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = []; // to dos

// click delete button 
function deleteToDo(event) {
  const btn = event.target; //이벤트 발생한 것
  const li = btn.parentNode; // 리스트를 지워야 되니깐 부모를 찾아서
  toDoList.removeChild(li); // li 제거하기

  // local storage 에서도 지우기
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !==  parseInt(li.id); // 타입이 같지 않아서 int로 바꿔준다 
  });
  toDos = cleanToDos; // const -> let(toDos) todos에 바뀐 cleanToDos를 넣는다 
  saveToDos(); // save
}

// save toDos
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // setItem(keyName , keyValue),JSON을 사용해서 object를 string으로 바꿔준다
}

 // paint todo
function paintToDo(text) {
  const li = document.createElement('li'); // <li> 생성
  const span = document.createElement('span'); // <span> 생성
  const delBtn = document.createElement('button'); // 삭제 버튼
  const newId = toDos.length + 1; // id값은 length에 +1

  delBtn.innerText ='x';
  delBtn.addEventListener('click',deleteToDo);  // 이벤트 리스너 만들기 for delete button 
  span.innerText = text;
  
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text : text,
    id: newId
  };

  toDos.push(toDoObj);  // toDos에 toDoObj를 push한다
  saveToDos();
}

//submit 관리
function handleSubmit(event) {
  const currentValue = toDoInput.value;

  event.preventDefault();
  paintToDo(currentValue);
  toDoInput.value ='';
}


//toDolist를 load하는것
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  
  if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // JSON을 사용하여서 localStroge에있는 문자열을 parsing 해서 obj
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener ('submit',handleSubmit);
}

init();