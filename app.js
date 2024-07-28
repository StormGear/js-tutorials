const greeting = name => {
   return `Hello, ${name}!`
}

// console.log(greeting('Hiro'));

async function message() {
   return 'Hello, World!'
}

const message2 = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')

   if (res.ok) {
        const users = await res.json()
        return users
     
   } else {
        throw new Error('Something went wrong')
   
   }
}

// console.log(message2());
message2().then(msg => msg.forEach(msg => console.log(msg.name))).catch(err => console.log(err.message))

