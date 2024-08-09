function makeItemIterator(items) {
    let nextIndex = 0;
    const itemIterator = {
        next:  () => {
            let result = nextIndex < items.length ? {
                value: items[nextIndex++],
                done: false
            } : {
                    done: true
                }
            return result;
        }
    }
    return itemIterator;
}
const itemsArr = ['Milk', 'Apple', 'Fish'];
// const itemIterator = makeItemIterator(itemsArr);
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())
// console.log(itemIterator.next())

// function* makeItemGenerator(items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i];

//     }
// }
// const itemGenerator = makeItemGenerator(itemsArr);
// let result = itemGenerator.next()
// console.log(result)
// while (!result.done) {
//     console.log('generator result:', result)
//     result = itemGenerator.next()
// }

// const myObject = {
//     *[Symbol.iterator]() {
//         yield 1;
//         yield 2;
//         yield 3;
//     },
//     greet() {
//         console.log('Hello')
//     }
// }

// for (const value of myObject) {
//     console.log('value:', value)
// }

function* asyncGenerator() {
    const result1 = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Result 1:', result1)

    const result2 = yield fetch('https://jsonplaceholder.typicode.com/posts/2');
    console.log('Result 2:', result2)
}

function run(generator) {
    const iterator = generator();
    const handle = (result) => {
        if (result.done) return;
        result.value.then(res => {
            res.json().then(data => {
                handle(iterator.next(data))
            }
        )
        })
    }
    handle(iterator.next())
}

run(asyncGenerator)




