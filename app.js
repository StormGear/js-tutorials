// const user = {
//     firstname: 'John',
//     secret: 'You are a good person',
//     getSecret() {
//         return `Hello ${this.firstname}, the secret message is ${this.secret}.`;
//     }
// }

// console.log(user.getSecret()); 
// console.log(user.secret);

// const user = (function () {
//     let name = 'John';
//     let secret = 'You are a good person';
//     const getSecret = function () {
//         return `Hello ${name}, the secret message is ${secret}.`;
//     }
//     return {
//         callGetSecret() {
//             return getSecret();
//         } 
//     }
// })()

const user = (function () {
    let name = 'John';
    let secret = 'You are a good person';
    const getSecret = function () {
        return `Hello ${name}, the secret message is ${secret}.`;
    }
    return {
       getSecret
    }
})()
console.log(user.getSecret());
