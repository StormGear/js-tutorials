let val;
// number to string
val = 999;
val = String(val);
val = true;
// date to string
val = new Date();
val = val.toString();

// array to string
val = [1, 2, 3, 4, 5];
val = val.toString();

// string to number
val = '5';
val = Number(val);

val = null;
val = Number(val);

val = parseInt('100.30');
val = parseFloat('100.31');

const num1 = 8;
const num2 = 18;
console.log(num1 + num2);



console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));