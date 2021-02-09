const fs = require('fs');
const path = require('path');
const moviesDAL = require('../DALS/moviesDAL');

const createMovie = async function(obj) {
    try {
        let result = await moviesDAL.writeFile(obj);
        return result
    } catch (err) {
        return (err);
    }

}

module.exports = { createMovie }


// class Movie {
//     constructor(name, genre) {
//       this.name = name;
//       this.genre = genre;
//     }
  
  
//     toJSON() {
//       return {
//         name: this.name,
//         genre: this.genre
//       }
//     }
  
//       async save() {
//       const movies = await Movie.getAll()
//       movies.push(this.toJSON())
  
//       return new Promise((resolve, reject) => {
//         fs.writeFile(
//           path.join(__dirname, '..', 'DALS', 'movies.json'),
//           JSON.stringify(movies),
//           (err) => {
//             if (err) {
//               reject(err)
//             } else {
//               resolve()
//             }
//           }
//         )
//       })
//     }

//     static getAll() {
//         return new Promise((resolve, reject) => {
//           fs.readFile(
//             path.join(__dirname, '..', 'DALS', 'movies.json'),
//             'utf-8',
//             (err, content) => {
//               if (err) {
//                 reject(err)
//               } else {
//                 resolve(JSON.parse(content))
//               }
//             }
//           )
//         })
//       }
// }

// module.exports = Movie;