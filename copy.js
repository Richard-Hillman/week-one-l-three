
const fs = require('fs').promises; 

async function copyFile(src, dst) { 

        const fileData = await fs.readFile(src, 'utf-8');
        await fs.writeFile(dst, fileData);
    
}


module.exports = { copyFile };

