const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
]

document.getElementById('next').addEventListener('click', nextUser)

function makeUserIterator(users) {
    let nextIndex = 0;
    const userIterator = {
        next() {
            let result;
            result = nextIndex < users.length ? { value: users[nextIndex++], done: false } : { done: true }
            return result;
        }
    }
    return userIterator
}

const userIterator = makeUserIterator(users)

nextUser();

function nextUser() {
    const user = userIterator.next().value
    console.log(user)
    if (user !== undefined) {
        document.getElementsByClassName('card-title')[0].innerText = `${user.first_name} ${user.last_name}`;
        document.querySelector('.card-text').innerText = `email: ${user.email}`;
        document.querySelector('.card-img-top').src = user.avatar;
    } else {
        window.location.reload()
    }
}