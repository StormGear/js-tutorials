const firstname = "Alan";
const lastname = "Turing";

let val;

// concatenate
val = firstname + lastname;
val = firstname + ' ' + lastname;

// Append
val = 'Alan ';
val += 'Turing';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstname.length;

// Concat
val = firstname.concat(' ', lastname,);


console.log(val);