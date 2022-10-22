function getTodo( key ){
    let todos = JSON.parse(localStorage.getItem(key));
    return todos;
}

function addTodo( todo ){
    const task = JSON.stringify(todo);
    localStorage.setItem("todos", task);
}

let todo = [
    {
        task : "",
        isCompleted : false,
    }
]
