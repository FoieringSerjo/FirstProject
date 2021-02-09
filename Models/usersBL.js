const fs = require('fs');
const path = require('path');


// const createUser = async function(obj) {
//   try
//   {
//       let result = await usersDAL.writeToFile(obj);
//       return result
//   }
//   catch(err)
//   {
//       return(err)
//   }
// }

// module.exports = {createUser}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }


  toJSON() {
    return {
      username: this.username,
      password: this.password,
    }
  }

    async save() {
    const users = await User.getAll()
    users.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'DALS', 'users.json'),
        JSON.stringify(users),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  } 

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'DALS', 'users.json'),
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }
}

module.exports = User;