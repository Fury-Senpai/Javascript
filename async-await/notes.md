## async / await

- `async` makes a function return a Promise.

```js
async function example() {
  return "Hello";
}

example().then(console.log); // Hello
```

- `await` pauses execution until the Promise resolves. You can use `await` only inside `async` functions.

### Example: Using await with a Promise

```js
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting!"), ms);
  });
}

async function run() {
  console.log("Waiting...");
  const result = await delay(2000);
  console.log(result);
}

run();
```