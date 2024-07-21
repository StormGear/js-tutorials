const todos = [
    { title: "First todo", body: "This is first todo" },
    { title: "Second todo", body: "This is third todo" }
]

function createTodo(todo) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            todos.push(todo)
            const err = false
            if (!err) {
                resolve('Todo added, promise resolved')
            } else {
                reject('There is an error, promise rejected')
            }
        }, 2000)

    })
}

function getTodos() {
    setTimeout(() => {
        let output = ''
        todos.forEach(function (todo) {
            output += `<li>${todo.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

// createTodo({ title: 'Third todo', body: "This is third todo" }).then((result) => {
//     console.log(result)
//     getTodos()
// }).catch(function (err) {
//     console.log(err)
// })

async function addTodo () {
try {
    result = await createTodo({ title: 'Third todo', body: "This is third todo" })
    getTodos()
    console.log(result)
} catch (error) {
    console.log(error)
}
}

addTodo()
