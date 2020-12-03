const { copyFile } = require('./copy.js');
const fs = require('fs').promises;

describe('copyFile', () => {
    it('copies a file using readFile and writeFIle', async() => {
        
        return copyFile('./README.md', './README2.md')
        .then(() => {
            return fs.readFile('./README2.md', 'utf-8')
        })
        .then(
            newFile => {
                expect(newFile).toEqual('sumsum')
            }
        )
    })
})