// ----- function to get all the todos form localStorage -----
function getTodo( key ){
    let todos = JSON.parse(localStorage.getItem(key));
    return todos;
};
// ----- function to add todo to localStorage------
function addTodo( todo ){
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
        return ` <li style="color:${data.color};"> ${data.task} <button onclick="taskdone(${index})">✓</button></li>`
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
     let todoList = todo.map((data , index)=>{
        return ` <li style="color:${data.color};"> ${data.task} <button onclick="taskdone(${index})">✓</button></li>`
    });
        showTodos(todoList);
    }
}

let inputTodo = document.getElementById("addTodo");
let addTodoBtn = document.getElementById("addTodoBtn");
let todosContainer = document.querySelector(".todos");
// --- function to set the color of the todo -----
let isNextSelected = false;
let todoColor = "white";
let tempColor = todoColor;
function setColor(color){
    todoColor = color;
    inputTodo.style = `color:${todoColor}`;
    let colorBtn = document.querySelector(`#${todoColor}`);
    colorBtn.style = "opacity:1";
    if(tempColor !== "white"){
        if(tempColor !== todoColor){
            let colorBtn = document.querySelector(`#${tempColor}`)
            colorBtn.style = "opacity:0.5";
        }
        if(tempColor == todoColor){
            todoColor = "white";
            inputTodo.style = "color:white;"
            let colorBtn = document.querySelector(`#${tempColor}`)
            colorBtn.style = "opacity:0.5";
        }
    }
    tempColor = todoColor;
}
// on add btn click
addTodoBtn.onclick = () => {
    if(inputTodo.value !== " "){
        todo.push({
            task:inputTodo.value,
            color:todoColor,
        });
        showTodos(todoToHtml(todo));
        addTodo(todo);
        inputTodo.value = " " ;
        let colorBtn;
        if(todoColor !== "white"){
            colorBtn = document.querySelector(`#${todoColor}`);
            colorBtn.style = "opacity:0.5"
        } 
        todoColor = "white";
        inputTodo.style = `color:${todoColor})`
    }
}

function taskdone(index){
    console.log(index)
    todo.splice(index,1);
    showTodos(todoToHtml(todo));
    addTodo(todo);
}
