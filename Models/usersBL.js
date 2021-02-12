const fs = require('fs');
const path = require('path');
const util = require('util');
const filePath = path.join(__dirname, '..', 'Data', 'Users.json');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class User {
  constructor({ id, username, password, role }) {
    this.id = id,
    this.username = username,
    this.password = password,
    this.role = role
  }

  toJSON() {
    return {
      username: this.username,
      password: this.password,
      id: this.id,
      role: this.role
    }
  }

  async save() {

    const users = await User.getAll()
    users.push(this.toJSON())
    await writeFile(filePath, JSON.stringify(users))
  }

  static async getAll() { return JSON.parse(await readFile(filePath)) }

}

module.exports = User;