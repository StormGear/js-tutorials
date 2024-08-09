let uniqueKey = Symbol("key");
const obj = {
  [uniqueKey]: "value",
  regularKey: "regularValue"
};
// uniqueKey = null;
// console.log(obj[uniqueKey]); // "value"
// console.log(uniqueKey.description); // "regularValue"

const person = {
    name: "John",
    [Symbol("id")]: 12345
  };

console.log(person.Symbol); // undefined
