//list of tasks
var taskArray = [];
var taskDoneArray = [];

//load and save lists from local storage
function load(){
  if (localStorage.getItem("doneList") != null){
    taskArray = JSON.parse(localStorage.getItem("taskList"));
    taskDoneArray = JSON.parse(localStorage.getItem("doneList"));
  }
  drawTaskList();
  drawDoneList();
}

function save(){
  localStorage.setItem("taskList", JSON.stringify(taskArray));
  localStorage.setItem("doneList", JSON.stringify(taskDoneArray));
}

//Open new task div
function toogleNewTask(){
  document.getElementById('newTaskBigContainer').classList.toggle('expand');
  toogleDiv('newTaskContainer');
};

//Hide and show divs elements
function toogleDiv(div) {
    if (document.getElementById(div).style.display == 'none')
        document.getElementById(div).style.display = 'block';
    else
        document.getElementById(div).style.display = 'none';
}

//Debug and easterEgg
function yay(){
  console.log("*yay*");
}

//Hide new task div after page load
window.onload = function(){
  toogleDiv('newTaskContainer');
  load();
}

//add a new task from new task div
function addTask(){
  var obj = {};
  obj.title = document.getElementById('titleNewTask').value;
  obj.content = document.getElementById('descriptionNewTask').value;
  taskArray.push(obj);
  document.getElementById('titleNewTask').value = "";
  document.getElementById('descriptionNewTask').value = "";
  drawTaskList();
  toogleNewTask();
  drawDoneList();
  save();
}

//Draw list of task
function drawTaskList(){
  var text = '';
  for (var i = 0; i < taskArray.length; i++) {
    text += '<div class="taskDiv">';
    text += '<div class="taskTitle">'
    text += taskArray[i].title;
    text += '</div>'
    text += '<div class="taskContent">'
    text += taskArray[i].content;
    text += '</div>';
    text += '<div onclick="concludeTask('+ i +')"> <img class="icon" src="confirm.png" alt="confirmar"> </div>';
    text += '<div onclick="deleteFromList('+ i +')"> <img class="deleteIcon" src="delete.png" alt="deletar"> </div>';
    text += '</div>';
  }
  document.getElementById('taskList').innerHTML = text;
}

//Draw list of concluded tasks
function drawDoneList(){
  var text = '';
  if (taskDoneArray.length > 0)
    text+= 'Tarefas concluidas:<br>';
  for (var i = 0; i < taskDoneArray.length; i++) {
    text += '<div class="taskDoneDiv">';
    text += '<div class="taskTitle">'
    text += taskDoneArray[i].title;
    text += '</div>'
    text += '<div class="taskContent">'
    text += taskDoneArray[i].content;
    text += '</div>';
    text += '<div onclick="returnTask('+ i +')"> <img class="icon" src="return.png" alt="retormar"> </div>';
    text += '<div onclick="deleteFromDone('+ i +')"> <img class="deleteIcon" src="delete.png" alt="deletar"> </div>';
    text += '</div>';
  }
  document.getElementById('completeTaskList').innerHTML = text;
}

//remove task from list and add to conclude list
function concludeTask(index){
  taskDoneArray.push(taskArray[index]);
  taskArray.splice(index, 1);
  drawTaskList();
  drawDoneList();
  save();
}

//remove task from conclude list and add to normal list
function returnTask(index){
  taskArray.push(taskDoneArray[index]);
  taskDoneArray.splice(index, 1);
  drawTaskList();
  drawDoneList();
  save();
}

//remove task from conclude list
function deleteFromDone(index){
  if (confirm("Quer mesmo apagar essa tarefa? Essa ação não pode ser desfeita")){
    taskDoneArray.splice(index, 1);
    drawTaskList();
    drawDoneList();
    save();
  }
}

//remove task from normal list
function deleteFromList(index){
  if (confirm("Quer mesmo apagar essa tarefa? Essa ação não pode ser desfeita")){
    taskArray.splice(index, 1);
    drawTaskList();
    drawDoneList();
    save();
  }
}
