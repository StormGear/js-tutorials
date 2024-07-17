localStorage.setItem('name', 'John');
localStorage.setItem('age', 30);

// set session storage
sessionStorage.setItem('name', 'Beth');
sessionStorage.setItem('age', 25);

localStorage.removeItem('name');
localStorage.removeItem('age');

let localname = localStorage.getItem('name');
let age = localStorage.getItem('age');
let sessionName = sessionStorage.getItem('name');




console.log(`Name: ${localname}, Age: ${age}`);
console.log(`Session Name: ${sessionName}`);





