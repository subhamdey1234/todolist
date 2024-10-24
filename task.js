let taskformele=document.getElementById('formele');
let taskinp=document.getElementById('task');


let tasklist=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];//local storage parsing 


taskformele.addEventListener('submit',function(e){
e.preventDefault();
let task=taskinp.value.trim();
tasklist.push(task);
localStorage.setItem('tasks',JSON.stringify(tasklist));
displaytask();

taskinp.value='';
})



function displaytask() {
    let eachtask='';
    tasklist.forEach( function(val,i) {
        eachtask=eachtask+`<li class="list-group-item list-group-item-secondary bg-dark mt-2">
                   <span class="text-white" style="text-decoration: none;color: black; font-weight: 900;">${val}</span>
                      <i class="bi bi-pen-fill text-white text-center" onclick="update(${i})"></i>
                    <i class="bi bi-archive-fill text-center text-white" onclick="deletetask(${i})"></i>
                </li>`
    } );
    document.getElementById('tasklist').innerHTML=eachtask;

}
displaytask();

function deletetask(index) {
    tasklist.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    displaytask();

}

function update(index) {
task.value=tasklist[index];
    tasklist.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    displaytask();
}