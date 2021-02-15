const fs = require('fs');
const path = require('path');
const util = require('util');
const filePath = path.join(__dirname, '..', 'Data', 'Users.json');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class User {
  constructor({ username, password, role, credits = 10}) {
    this.username = username,
    this.password = password,
    this.role = role,
    this.credits = credits
    this.date = new Date()
  }

  toJSON() {
    return {
      username: this.username,
      password: this.password,
      role: this.role,
      credits: this.credits,
      date: this.date
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