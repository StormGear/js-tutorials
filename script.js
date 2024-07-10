function user(name = 'Mary', age = 80) {
    return 'Name: ' + name + ', Age: ' + age;
}

// console.log(user('Alan', 20)); 

const sum = (a = 2, b = 3) => a + b;

console.log(sum());

// immediately invoked function expression
(function() {
    console.log('IIFE');
})();

const person = {
    hello: 'John',
    age: 30,
    greet()  {
        console.log('Hello there!');
    }
};

person.greet();

