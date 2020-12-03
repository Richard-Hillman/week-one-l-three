const fetch = require('node-fetch'); 

function getCharacter(id) {
    return fetch(`https://rickmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(character => {
            return {
                name: character.name,
                status: character.status,
                species:character.species
            }
        })
}