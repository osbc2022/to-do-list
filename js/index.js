// ----- function to get all the todos form localStorage -----
function getTodo( key ){
    let todos = JSON.parse(localStorage.getItem(key));
    return todos;
};
// ----- function to add todo to localStorage------
function addTodo( todo ){
    console.log(todo)
    const task = JSON.stringify(todo);
    localStorage.setItem("todos", task);
};
// ---- function to show all the todos ----
function showTodos(todoList){
    todosContainer.innerHTML = todoList.join(" ");
}
// ---- function to convert todo into html -----
function todoToHtml(todo){
    let todoList = todo.map((data , index)=>{
        return ` <li> ${data} <button onclick="taskdone(${index})">✓</button></li>`
    });

    return todoList;
}
// ----- the overall logic of the site -----
let todo = (getTodo("todos")) ? getTodo("todos") : [ ];
//onload
window.onload = () =>{
    if (todo.length == 0){
        let msg = ["Your todos will apear here"];
        showTodos(msg);
    }else{
        showTodos(todo)
    }
}

let inputTodo = document.getElementById("addTodo");
let addTodoBtn = document.getElementById("addTodoBtn");
let todosContainer = document.querySelector(".todos");
// on add btn click
addTodoBtn.onclick = () => {
    console.log(`${inputTodo.value}`)
    todo.push(`${inputTodo.value}`);
    showTodos(todoToHtml(todo));
    addTodo(todo);
    inputTodo.value = " " ;
}

function taskdone(index){
    console.log(index)
    todo.splice(index,1);
    showTodos(todoToHtml(todo));
    addTodo(todo);
}
