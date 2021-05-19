# Working with the node.js filesystem, using Promises

This project will show you how to use the node.js filesystem with Promises

## What you will be doing

This project will allow you to practise using:

> the filesystem (fs) in node.js

This project assumes you've already had experience with:

> - JavaScript
> - Promise API

## Tasks

For these tasks, you are expected to write your code in the file `server.js`

> Hint: Remember, since we are using Promises for these tasks, you should use either async / await or the Promise API
>
> Research: [async / await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
>
> Research: [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Task 1 - Importing the 'fs' module

For this task, we will be using the node.js module, `fs`

Look over your notes regarding the node.js file system

Before you can use the `fs` module, we should import it

Since we are specifically dealing with the Promises version of the `fs` object, we must import it like this:

```js
const fs = require('fs').promises;
```

## Task 2 - Writing data

```
fs.writeFile(path, data, options);
```
Research: [fs.writeFile()](https://www.geeksforgeeks.org/node-js-fspromises-writefile-method/)

1. Create a function called `writeToFile` which will write data to the server

   - when you call your function `writeToFile`, it should write data to the server
   - internally it should use the function `fs.writeFile()`
   - the function should take 2 arguments, `filename` and `data`
   
2. Test your function by trying to write some data

## Task 3 - Appending data

```
fs.appendFile(path, data);
```
Research: [fs.appendFile()](https://www.geeksforgeeks.org/node-js-fs-promises-appendfile-method/)

1. Create a function called `appendToFile` which will append data to a file on the server

   - when you call your function `appendToFile`, it should append (add) data to the specified file on the server
   - internally it should use the function `fs.appendFile()`
   - the function should take 2 arguments, `filename` and `data`
   
2. Test your function by trying to write some data

## Task 4 - Reading data

```
fs.readFile(path, options);
```
Research: [fs.readFile()](https://www.geeksforgeeks.org/node-js-fspromises-readfile-method/?ref=lbp)

1. Create a function called `readFromFile` which will read data from a file on the server

   - when you call your function `readFromFile`, it should read data from the specified file on the server
   - internally it should use the function `fs.readFile()`
   - the function should take 2 arguments, `filename` and `data`

2. Test your function by trying to read some data
