const {readFile, writeFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

const writeText = (path, text) => {
    return new Promise((resolve, reject) => {
        writeFile(path, text,
        (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log('done');
                resolve('done');
            }
        })
    })
}

// getText('./content/first.txt')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        await writeText('./content/result-Promise.txt', `Here is the result : ${first}, ${second}`);
        
        console.log(first);
    } catch (error) {
        console.log(error);    
    }
}

start();
console.log('here');