let val;
let d = new Date('12-12-1999 12:00:00');
d = new Date('December 12 1999');
d = new Date('12/12/1999');
// val = d;

console.log(d);

// Get the month
val = d.getMonth();
val = d.getDate(); 
val = d.getDay();
val = d.getFullYear();
val = d.getHours();
val = d.getMinutes();
val = d.getTime(); 
d.setMonth(2);
d.setDate(12);
d.setFullYear(1999);
d.setHours(3);
d.setMinutes(30);
d.setSeconds(25);
// console.log(d);
// console.log(val);

