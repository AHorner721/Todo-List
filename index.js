// selectors
const input = document.getElementById('newItem');
const addBtn = document.querySelector('.addBtn');
const itemList = document.querySelector('.itemList');
// events
addBtn.addEventListener('click', addTask);
itemList.addEventListener('click', deleteItem);
// functions

function addTask(event){
    event.preventDefault();
    //create new task item
    const todo = document.createElement('div');
    const task = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completeBtn = document.createElement('button');
    
    // add classes & content
    task.innerText = input.value;
    deleteBtn.innerText = 'X';
    todo.classList.add('item');
    deleteBtn.classList.add('btn');
    completeBtn.classList.add('complete-btn');

    // attach task to item list
    todo.appendChild(completeBtn);
    todo.appendChild(task);
    todo.appendChild(deleteBtn);
    itemList.appendChild(todo);

    //clear input field
    input.value = '';
}

function deleteItem(event){
    const item = event.target;
    // delete todo item
    if(item.classList[0] === 'btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //complete item
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        item.classList.toggle('fill');
    }
}