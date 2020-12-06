const fetch = require('node-fetch'); 
const { getCharacter } = require('./getCharacter')

const getManyCharacters = ids => {
    return Promise.all(ids.map(id => getCharacter(id)))
};


module.exports = {
    getManyCharacters
};    
