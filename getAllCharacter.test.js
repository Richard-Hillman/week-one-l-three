const fs = require('fs')
const { getManyCharacters } = require('./getAllCharacters');

describe('getAllCharacters', () => {
    it('gets all characters from the r and m api', async () => {
        const characters = await getManyCharacters ([1, 3, 5]);
        
        fetch.mockResolvedValue({
            json:() => Promise.resolve(mockApiResponse)
        });

        expect(characters).toEqual([
            {name: 'Rick Sanchez', species: 'Human', status: 'Alive'},
            {name: 'Summer Smith', species: 'Human', status: 'Alive'},
            {name: 'Jerry Smith', species: 'Human', status: 'Alive'},
        ]) 
    })
})