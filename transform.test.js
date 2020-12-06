const { transform } = require('./transform.js');
const fs = require('fs').promises;

describe('transform', () => {
    it('reads a file and removes uppercase then makes all characters uppercase then reverses string', async() => {
        
        const transformed = await transform('./testFile.txt')
                expect(transformed).toEqual('DLRO OLLE')
            }
        )
    })