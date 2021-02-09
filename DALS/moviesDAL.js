const jsonfile = require('jsonfile');

exports.writeFile = function (obj) {
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(__dirname + "/movies.json", obj, {spaces: 2}, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(console.log(obj))
            }
        })
    })
}