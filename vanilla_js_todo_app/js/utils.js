export function formatLocalDateTime(timestamp = Date.now()) {
    return new Date(timestamp).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}



export function getTodoItemHTML(todo) {
    return `
        <li class="todo-item">
                <div class="todo-contant">
                    <h2 class="todo-heading">${todo.name}</h2>
                    <span class="todo-date">${formatLocalDateTime(todo.id)}</span>
                </div>

                <div class="todo-buttons">
                     <i class="fa-solid fa-xmark todoiconclass" id="x-${todo.id}"></i>
                     <i class="fa-solid fa-check todoiconclass" id="c-${todo.id}"></i>
                </div>
            </li>
    `
}


export function getTodoCHTML(todo) {
    return `
    <li class="todo-item">
                <div class="todo-contant">
                    <h2 class="todo-heading" style="text-decoration: line-through;">${todo.name}</h2>
                    <span class="todo-date">${formatLocalDateTime(todo.id)}</span>
                </div>

                <div class="todo-buttons">
                     <i class="fa-solid fa-xmark todoiconclass" id="x-${todo.id}"></i>
                     <i class="fa-solid fa-chevron-up todoiconclass" id="m-${todo.id}"></i>
                </div>
            </li>`
}

