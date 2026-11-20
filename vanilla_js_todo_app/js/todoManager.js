export function createTodoManager() {

    let todoList = JSON.parse(localStorage.getItem("todolist")) || [];
    let completedTodos = JSON.parse(localStorage.getItem("completedtodos")) || [];

    
    const listeners = new Set();


    function subscribe(callback) {
        listeners.add(callback);

        return () => listeners.delete(callback);
    }

    function notifyChange() {
        listeners.forEach(callback => callback({
            todos: getTodos(),
            completedTodos: getCompletedTodos(),
            stats: getStats()
        }));
    }

    function saveTodos() {
        localStorage.setItem("todolist", JSON.stringify(todoList));
        localStorage.setItem("completedtodos", JSON.stringify(completedTodos));
    }

    function addTodo(name) {
        const newTodo = {
            id: Date.now(),
            name
        };

        todoList.unshift(newTodo);
        saveTodos();
        notifyChange();

        return newTodo;
    }

    function removeTodo(id) {
        const exists = [...todoList, ...completedTodos]
            .some(todo => todo.id === id);

        if (!exists) return false;

        todoList = todoList.filter(todo => todo.id !== id);
        completedTodos = completedTodos.filter(todo => todo.id !== id);

        saveTodos();
        notifyChange();

        return true;
    }

    function getTodoById(id) {
        return [...todoList, ...completedTodos]
            .find(todo => todo.id === id) || null;
    }

    function markCompleted(id) {
        const index = todoList.findIndex(todo => todo.id === id);

        if (index === -1) return false;

        const [todo] = todoList.splice(index, 1);
        completedTodos.unshift(todo);

        saveTodos();
        notifyChange();

        return true;
    }

    function markUncompleted(id) {
        const index = completedTodos.findIndex(todo => todo.id === id);

        if (index === -1) return false;

        const [todo] = completedTodos.splice(index, 1);
        todoList.unshift(todo);

        saveTodos();
        notifyChange();

        return true;
    }

    function getTodos() {
        return [...todoList];
    }

    function getCompletedTodos() {
        return [...completedTodos];
    }

    function getStats() {
        return {
            total: todoList.length + completedTodos.length,
            completed: completedTodos.length,
            uncompleted: todoList.length
        };
    }

    return {
        subscribe,
        addTodo,
        removeTodo,
        getTodoById,
        markCompleted,
        markUncompleted,
        getTodos,
        getCompletedTodos,
        getStats
    };
}