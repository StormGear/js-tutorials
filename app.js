class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      // Single user message
      to.receive(message, from);
    } else {
      // Mass message
      for (key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

const Kofi = new User('Kofi');
const Ama = new User('Ama');
const Kwame = new User('Kwame');
const chatroom = new Chatroom();
console.log('Kofi before being registered in a chatroom', Kofi);
// Register Kofi in the chatroom
chatroom.register(Kofi);
chatroom.register(Ama);
chatroom.register(Kwame);
console.log('Kofi after being registered in a chatroom', Kofi);
Kofi.send('Hello Ama', Ama);


