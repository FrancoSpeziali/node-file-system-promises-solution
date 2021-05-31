const fs = require('fs');

function writeToFile(filename, data) {
    fs.writeFile("data.txt", "something", {
        encoding: "utf8"
    }, (error) => {
        if(error) {
            return Promise.reject();
        }
        Promise.resolve();
    });
}

writeToFile("data.txt", "hello");