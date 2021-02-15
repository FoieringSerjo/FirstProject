const fs = require('fs');
const path = require('path');
const moviesDAL = require('../DAL/moviesDAL');
const util = require('util');
const axios = require('axios');

const filePath = path.join(__dirname, '..', 'Data', 'NewMovies.json');

// const getMoviesWebData = async function() {
//     let data = await axios.get('https://api.tvmaze.com/shows')
//     let finalData = [];

//     let moviesArr = data.data;

//     let moviesId = moviesArr.map(x =>'id: ' + x.id)
//     finalData.push(moviesId)
//     return finalData
// }


const readFile = util.promisify(fs.readFile);
const createMovie = async function (obj) {
    try {
        let currrentMovies = JSON.parse(await readFile(filePath))
        currrentMovies.push(obj);
        let result = await moviesDAL.writeFile(currrentMovies);
        return result
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = { createMovie }