let edit = document.getElementById('edit');
let delete1 = document.getElementById('delete');
let tasks = document.querySelector('.tasks');
let taskName = document.getElementById('input-box');
let add = document.getElementById('add');
let mood = 'create';
let t;

let taskData = [];
if(localStorage.task != null ){
taskData=JSON.parse(localStorage.task)

}

else{
  taskData = [];
}










add.onclick= function(){

let newTask = {
  taskName:taskName.value, 
}


if(mood==='create'){
taskData.push(newTask);
}
else{
  taskData[t]=newTask;
  mood= 'create';
  add.innerHTML='اضافة';
}


  localStorage.setItem('task',JSON.stringify(taskData));
  console.log(taskData);
  showData();

}

function showData(){
 let task1='';
 for(let i = 0 ; i<taskData.length;i++){
task1 += `   

  <ul>
    <li>${taskData[i].taskName} <li>
<div class="icons">
<div onclick='deleteData(${i})'  id="delete" ><img width="30px" src="trash.png"></div>
<div onclick='updateData(${i})' id="edit"><img width="30px" src="edit.png">
</div>

</div>

</ul>



`



 }

  document.getElementById('task0').innerHTML=task1
  clearData();

}


function clearData(){
  taskName.value='';
}
showData();
function deleteData(i){

taskData.splice(i,1);
localStorage.task=JSON.stringify(taskData);
showData();

}

function updateData(i){

taskName.value=taskData[i].taskName
add.innerHTML='تعديل'
mood='update'
t=i;
} 

