
const fs = require('fs').promises;

const replaceCapital = str => {
    return str.replace( /[^a-z\s]/g, '' );
}

function transform(src) {
    return fs.readFile(src, 'utf-8')
    .then(data => {
        return replaceCapital(data);
    })
    .then(data => {
        return data.toUpperCase();
    })
    .then(data => {
        return data.split('').reverse().join('');
    })
}

transform('./testFile.txt').then(console.log);