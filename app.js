const set1 = new Set([1, 2, 3, 4, 5]);
set1.add({ name: 'John' });
// console.log(set1)
// set1.forEach((element) => console.log(element))

// for (const item of set1) {
//     console.log(item);
// }

// for (const item of set1.values()) {
//     console.log(item);
// }

// for (const item of set1.keys()) {
//     console.log(item);
// }

// for (const [key, value] of set1.entries()) {
//     console.log(value);
// }

let arr = Array.from(set1)
console.log(arr)

