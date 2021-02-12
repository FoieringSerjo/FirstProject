const jsonfile = require('jsonfile');
const filePath = ("./Data/NewMovies.json")
exports.writeFile = function (obj) {
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(filePath, obj, {spaces: 2}, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve((obj))
            }
        })
    })
}