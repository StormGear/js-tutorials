const firstname = 'Alan';
const lastname = 'Turing';
let drinking = 'beer';
let age = 12;
let message;

const drink = () => {
    if (age > 18) {
        return 'beer';
    } else {
        return 'coke';
    }
}

message = 'Hello, my name is ' + firstname + ' ' + lastname + ' and I like ' + drinking + '.';
message = `Hello, my name is ${firstname} ${lastname} and I like ${age > 18 ? 'beer' : 'coke'}.`;
console.log(message);