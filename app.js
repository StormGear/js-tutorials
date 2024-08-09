const users = new  Map();
const boys =   {
    '1': 'John',
    '2': 'Peter',
    '3': 'Mary',
}

users.set('1', 'John');
users.set('2', 'Peter');
users.set('3', 'Mary');
// users.set(function Peter() {}, {'Peter':'here'});
// console.log(users.has('2')); // true
// console.log(users.get('1')); // John
// console.log(users.size); // 2
// console.log(typeof boys); // object
// console.log(users.delete('1')); // true
// console.log(users.size); // 2

// for (const [key, value] of users) {
//     console.log(key + ' = ' + value);
// }

for (const key of users.keys()) {
    console.log(key);
}

for (const value of users.values()) {
    console.log(value);
}

users.forEach((value, key) => {
    console.log(key + ' = ' + value);
});

const usersArray = Array.from(users.keys()); 
console.log(usersArray);

const keysArray = Array.from(users.values()); 
console.log(keysArray);
