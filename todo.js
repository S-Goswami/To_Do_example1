var list_count = 0;
var active_listId ='';

function openAddListPopup(){
    document.getElementById('todo-app').classList.add('blur-background');
    document.getElementById('pop-up-add-list').classList.remove('display-none');
}

function displayEmptyListSection() {
    if(list_count > 0){
        document.getElementById('noToDo').classList.add('display-none');
    } else {
        document.getElementById('noToDo').classList.remove('display-none');
    }
}

function addListItem() {
    
    // Adds an element to the document
    var list_section = document.getElementById('list-section');
    var newElement = document.createElement('div');
    let new_list_name = document.getElementById('add-new-list').value;
    newElement.setAttribute('id', 'list_Item' + list_count);
    newElement.setAttribute('class', 'task');
    newElement.innerHTML = `<div class="task-header">${new_list_name}</div><div class="task-section">
        <ul id= task_list${list_count} class="list-type-none">
            
        </ul>
    </div>
    <div class="list-buttons"> 
        <button class="rounded-circle delete-icon" onclick="removeToDoList(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button class="plus-icon" onclick="openAddTaskPopup(this)"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i></button>
    </div>`;
    list_section.appendChild(newElement);
    list_count += 1; 
    displayEmptyListSection();
    document.getElementById('add-new-list').value = '';
    closeAddListPopup();
}

function closeAddListPopup() {
    document.getElementById('todo-app').classList.remove('blur-background');
    document.getElementById('pop-up-add-list').classList.add('display-none');
}

function removeToDoList(element){
    console.log('removeToDoList', element)
    let listID = element.parentNode.parentNode;
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
    list_count -=1;
    displayEmptyListSection();
}

function openAddTaskPopup(listElement){
    active_listId = listElement.parentNode.parentNode;
    document.getElementById('todo-app').classList.add('blur-background');
    document.getElementById('pop-up-add-task').classList.remove('display-none');
}

function addTaskItem(){
    if(active_listId){
        var active_list_element = document.getElementById(active_listId.getAttribute('id'));
        var task_name = document.getElementById('add-new-task').value;
        var task_node = document.createElement('div');
        task_node.setAttribute('class','');
        task_node.innerHTML= `&nbsp;&nbsp;${task_name}
        <button class="mark-done" onclick="markTaskAsDone(this)">Mark Done</button>`;
        active_list_element.childNodes[1].childNodes[1].appendChild(task_node);
        document.getElementById('add-new-task').value = '';
        closeAddTaskPopup();
    }
}

function closeAddTaskPopup(){
    document.getElementById('todo-app').classList.remove('blur-background');
    document.getElementById('pop-up-add-task').classList.add('display-none');
}

function markTaskAsDone(element){
    element.parentNode.classList.add('completed-task');
    element.remove();
}