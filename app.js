

/* The PageState class manages the state of a webpage and allows for switching between different
states. */
class PageState {
    constructor() {
        this.currentState = new homeState(this);
    }
    init() {
        this.change(new homeState)
    }
    change(state) {
        this.currentState = state;
        document.querySelector('#currentState').textContent = `Current State: ${state.constructor.name}`;
    }
}

class homeState {
    constructor(page) {
        document.querySelector('#heading').textContent = null;
        document.querySelector('#content').innerHTML = '<h1>Home</h1>';
    }
}

class aboutState {
    constructor() {
        document.querySelector('#heading').textContent = 'About page';
        document.querySelector('#content').innerHTML = '<p>about</p>';
    }
}

class contactState {
    constructor() {
        document.querySelector('#heading').textContent = 'Contact page';
        document.querySelector('#content').innerHTML = '<p>contact<p>';
    }
}


const page = new PageState();
page.init();

const home = document.getElementById('home'),
about = document.getElementById('about'),
contact = document.getElementById('contact');

home.addEventListener('click', e => {
    page.change(new homeState)
})
about.addEventListener('click', e => {
    page.change(new aboutState)
})
contact.addEventListener('click', e => {
    page.change(new contactState)
})


