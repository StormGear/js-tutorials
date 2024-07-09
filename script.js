const arr1 = [30, 1, 2]
const arr2 = Array(80, 12);
const users = ['Alan', 2, true, Symbol('Alan'), {name: 'Alan'}, [1, 2, 3]];
val = Array.isArray(users);
// console.log(val);

// manipulating arrays
const fruits = ['apple', 'banana', 'orange', 'mango'];
// console.log(fruits);

// Array methods
// push() - adds an element to the end of an array
fruits.push('grapes');

// pop() - removes the last element from an array
fruits.pop();

// unshift() - adds an element to the beginning of an array
fruits.unshift('strawberries');

// shift() - removes the first element from an array
fruits.shift();

// splice() - removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
const removed = fruits.splice(1, 2, 'kiwi', 'watermelon');

// reverse() - reverses the order of the elements in an array
fruits.reverse();

// concat() - merges two or more arrays, returning a new array
// console.log(fruits.concat(['pear', 'peach'])); 

// sort based on the greater value
const numbers = [1, 100, 2, 25, 3, 10];
// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

// find() - returns the value of the first element in an array that passes a test
function over10(num, index, arr) {
    // console.log(num, index, arr);
    return num > 10;
}
console.log(numbers.filter(over10));

// indexOf() - returns the index of the first occurrence of the specified element in an array
// console.log(removed);
console.log(fruits);
