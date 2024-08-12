class TodoList {
    constructor() {
        /** @type {string[]} */
        this.todos = [];
    }
   
    /**
     * Adds a todo item to the list.
     * @param {string} todo - The todo item to add.
     */
    add(todo) {
        this.todos.push(todo);
    }
    
    /**
     * Removes a todo from the list.
     * 
     * @param {any} todo - The todo item to be removed.
     */
    remove(todo) {
        this.todos = this.todos.filter(item => item !== todo);
    }

    /**
     * Retrieves the todos.
     *
     * @returns {string[]} The todos.
     */
    get() {
        return this.todos;
    }

    /**
     * Returns the number of items that have been added to the list.
     *
     * @returns {string} The number of items that have been added.
     */
    viewList() {
       return `${this.todos.length} items have been added`;
    }
}

// const todoList = new TodoList();
// todoList.add('Learn JavaScript');
// todoList.add('Learn React');

// // console.log(todoList.viewList()); 

// const todoList2 = new TodoList();
// todoList2.add('Learn Angular');
// todoList2.add('Learn Vue');

// console.log(todoList2.viewList());

// console.log(todoList === todoList2); 

class SingleTodoList {
    constructor() {
        if (SingleTodoList.instance == null) {
            this.todos = [];
            SingleTodoList.instance = this;
        }
        return SingleTodoList.instance;
    }

    getInstance() {
        return SingleTodoList.instance;
    }

    add(todo) {
        this.todos.push(todo);
    }

    viewList() {
        return `${this.todos.length} items have been added`;
     }
}

let todoList = new SingleTodoList();
let todoList2 = new SingleTodoList();
todoList.add('Learn JavaScript');
todoList2.add('Learn React');
console.log(todoList.viewList());
console.log(todoList2.viewList());
console.log(todoList === todoList2);
