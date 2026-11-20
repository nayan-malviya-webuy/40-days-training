
import { getTodoCHTML, getTodoItemHTML } from "./utils.js";
import { createTodoManager } from "./todoManager.js";




const todoCont = document.querySelector("#todo-container-id");
const todoContC = document.querySelector("#todoc-container-id");
const todoForm = document.querySelector("#todoform")
const searchBar = document.querySelector("#searchbar")


const todoManager = createTodoManager();



function renderTodos(data) {

    const todos = data.todos;
    const completedTodos = data.completedTodos;



    if (!todos || todos.length === 0) {

        todoCont.innerHTML = '<span>No pending todos</span>';

    } else {

        let todoHTML = '';

        todos.forEach(todo => {
            todoHTML += getTodoItemHTML(todo);
        });

        todoCont.innerHTML = todoHTML;
    }


    if (!completedTodos || completedTodos.length === 0) {

        todoContC.innerHTML = '<span>No completed todos</span>';

    } else {

        let completedTodoHTML = '';

        completedTodos.forEach(todo => {
            completedTodoHTML += getTodoCHTML(todo);
        });

        todoContC.innerHTML = completedTodoHTML;
    }

    console.log("Todos rendered successfully");
}



const unsubscribe = todoManager.subscribe((data) => {
    renderTodos(data);

});



renderTodos({
    todos: todoManager.getTodos(),
    completedTodos: todoManager.getCompletedTodos()
});



todoForm.addEventListener('submit', e => {
    e.preventDefault()
    todoManager.addTodo(searchBar.value)
})



document.addEventListener('click', e => {
    if (e.target.closest(".todoiconclass")) {
        const targetId = e.target.id
        const id = Number(String(targetId).slice(2))

        if(targetId.match('c-')){
            todoManager.markCompleted(id)
        }else if(targetId.match('m-')){
            todoManager.markUncompleted(id)
        }else{
            todoManager.removeTodo(id)
        }
        
    }
});