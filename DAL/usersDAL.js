const jsonfile = require('jsonfile');

exports.writeFile = function (user) {
  return new Promise((resolve, reject) => {
    jsonfile.writeFile(__dirname, '..', 'Data','Users.json', user, function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve('Created!')
      }
    })
  })
}
