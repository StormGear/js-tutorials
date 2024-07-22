document.getElementById('button1').addEventListener('click', getText2)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPI)

function getText() {

    fetch('test.txt').then(function (res) {
        return (res.text())
    }).then(function (data) {
        document.getElementById('output').innerText = data
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

function getJSON() {

    fetch('todos.json').then(function (res) {
        console.log(res.status)
        return (res.json())
    }).then(function (todos) {
        let output = '';
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`
        });
        document.getElementById('output').innerHTML = output
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}

async function getText2() {
    try {
    const result = await fetch('test.txt')
    const data = await result.text()
    document.getElementById('output').innerHTML = data
    } catch (error) {
        console.log('ERROR: ' + error)
    }
}

function getAPI() {
    
        fetch('https://api.github.com/users').then(function (res) {
            return (res.json())
        }).then(function (data) {
            let output = '';
            data.forEach(user => {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output
        }).catch(function (err) {
            console.log('ERROR: ' + err)
        })
}