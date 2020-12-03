// create and export a copy(src, dst) function
// require const fsPromises = require('fs').promises;
// use fsPromises.readFile to read a file
// then use fsPromises.writeFile to write the read data
// return the promise
// test
// test your copy function
// invoke your copy function
// then expect that the new file exists
// make sure to clean up copied files in an afterAll or afterEach


const fs = require('fs').promises; 

// async function reader() { 
//     try {
//         const data = await fs.readFile(src, 'UTF-8');
//         console.log(data);
//     } catch(err) {
//         console.log(err);
//     }
// }

async function copyFile(src, dst) { 
    try {
        const fileData = await fs.readFile(src, 'utf-8');
        await fs.writeFile(dst, fileData);
    } catch(err) {
        console.log(err);
    }
}


module.exports = { copyFile };

