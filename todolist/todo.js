const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  
  delBtn.innerText ='x';
  span.innerText = text;
  
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}// paint todo

function handleSubmit(event) {
  const currentValue = toDoInput.value;

  event.preventDefault();
  paintToDo(currentValue);
  toDoInput.value ='';
} //submit 관리

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  
  if(toDos !== null) {
    //있으면
  }
} //toDolist를 load하는것

function init() {
  loadToDos();
  toDoForm.addEventListener ('submit',handleSubmit);
}

init();