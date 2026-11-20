import { createTodoManager } from "./todoManager.js";
import { getTodoCHTML, getTodoItemHTML } from "./utils.js";


const todoCont = document.querySelector("#todo-container-id")
const todoContC = document.querySelector("#todoc-container-id")





const todoManager = createTodoManager(() => {
    const todos = todoManager.getTodos()
    const cTodos = todoManager.getCompletedTodos()


    // todo container inner html
    if (!todos || todos.length === 0) {
        todoCont.innerHTML = '<span>Error</span>'
    } else {
        let todoHTML = ''
        todos.forEach(todo => {
            todoHTML += getTodoItemHTML(todo)
        })

        todoCont.innerHTML = todoHTML
    }


    if (!cTodos || cTodos.length === 0) {
        todoContC.innerHTML = '<span>Error</span>'
    } else {
        let todoCHTML = ''
        cTodos.forEach(todo => {
            todoCHTML += getTodoCHTML(todo)
        })

        todoContC.innerHTML = todoCHTML
    }

    console.log("working")

});


