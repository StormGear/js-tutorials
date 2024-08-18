/* The `Click` class in JavaScript allows for subscribing, unsubscribing, and executing functions as
observers. */
class Click {
    constructor() {
    this.observers = [];
    }

  /**
   * The `subscribe` function adds a new function to the list of observers and logs a message
   * indicating the subscription.
   * @param func - The `func` parameter in the `subscribe` method is a function that you want to
   * subscribe to. When you call the `subscribe` method and pass a function as an argument, that
   * function will be added to the list of observers in the `observers` array.
   */
    subscribe(func) {
        if (this.observers.includes(func)) {
            console.log(`Already subscribed to this function: ${func.name}`);
            return;
        }
        this.observers.push(func);
        console.log(`Subscribed to this function: ${func.name}`);
    }

    unsubscribe(func) {
        if (!this.observers.includes(func)) {
            console.log(`Not subscribed to this function: ${func.name}`);
            return;
        }
        this.observers = this.observers.filter(observer => observer !== func);
        console.log(`Unsubscribed from this function: ${func.name}`);
    }

    execute() {
        if (this.observers.length === 0) {
            console.log('No observers to execute');
            return;
        }
        this.observers.forEach(observer => observer());
    }
}

const click = new Click();
document.querySelector('.sub1').addEventListener('click', () => click.subscribe(getCurrentTime));
document.querySelector('.unsub1').addEventListener('click', () => click.unsubscribe(getCurrentTime));
document.querySelector('.sub2').addEventListener('click', () => click.subscribe(getCurrentDate));
document.querySelector('.unsub2').addEventListener('click', () => click.unsubscribe(getCurrentDate));
document.querySelector('.exe').addEventListener('click', () => click.execute());

function getCurrentTime() {
    console.log(`Current time is ${new Date().toLocaleTimeString()}`);
}

function getCurrentDate() {
    console.log(`Current date is ${new Date().toLocaleDateString()}`);
}
