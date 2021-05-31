const fsPromises = require('fs').promises;

const file = "data.txt";

// callee
async function writeToFile(filename, data) {
    return await fsPromises.writeFile(filename, data);
}

// callee
async function appendToFile(filename, data) {
    return await fsPromises.appendFile(filename, data);
}

// callee
async function readFromFile(filename) {
    return await fsPromises.readFile(filename, { encoding: "utf8" });
}

// caller
writeToFile(file, "JS rocks!")
    .catch((_) => {
        console.log("An error occurred")
    });

// caller
appendToFile(file, "JS rocks!")
    .catch((_) => {
        console.log("An error occurred")
    });

// caller
readFromFile(file, "Actually I hate JS :D")
    .then((fileContent) => {
        console.log(fileContent);
    })
    .catch((_) => {
        console.log("An error occurred")
    });
