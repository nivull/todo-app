let trashCan = document.querySelectorAll(".trash");
const form = document.getElementById("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("list");
let items = [];
updateItems();
trashCan.forEach((element)=> {
    addEventListener('click', (_, i)=>{
        items.splice(i, 1);
    })
});

form.addEventListener('submit', (element)=>{
    element.preventDefault();
    if(todoInput.value.length > 0) {
        const createdTodo = {
            text: todoInput.value.trim(),
            checked: ""
        };
        createTodo(createTodo);
        todoInput.value = "";
    }
});



/*function clickedTrash() {
    console.log("e");
    trashCan.forEach((element, i)=> {
        if(getEventListeners(element) === null) {
            element.addEventListener('click', (_, j)=>{
                console.log(items.length + " before");
                items.splice(j, 1);
                console.log(items.length + " after");
            });        
        }
    }); 
}
*/
function createTodo(todo) {
    const todoNum = items.length;
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
        <input type="checkbox" id="todo-${todoNum}">
            <label for="todo-${todoNum}" class="custom-checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>

        <label class="todo-text" for="todo-${todoNum}">${todo.text}</label>
            <button type="button" class="trash" data-index="${todoNum}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>`;   
    items.push();      
    updateItems();
}

function updateItems() {

    updateStorage();
    for(let x of items) {
        todoList.append(x);
    }

    trashCan = [...document.querySelectorAll(".trash")];

    //trash can code
    if(trashCan.length > 0) {
        trashCan[trashCan.length - 1].addEventListener('click', (e)=>{
            const i = trashCan.indexOf(e.currentTarget);
            console.log(items.length + " before");
            items.splice(i, 1);
            trashCan.splice(i, 1);
            
            const clickedTrash = e.currentTarget;
            const toRemove = clickedTrash.closest("li");
            toRemove.remove();
            console.log(items.length + " after");
        });
    }
}

function loadStorage() {

}

function updateStorage() {

    localStorage.setItem("todos", JSON.stringify(items));
    console.log(items);

}

