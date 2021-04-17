const MongoLib = require('./mongodb');

class UsersService {
  constructor() {
    this.collection = 'users_collection';
    this.mongoDB = new MongoLib();
  }

  async getUsers() {
    const user = await this.mongoDB.getAll(this.collection);

    return user;
  }
  async getUser(id) {
    const user = await this.mongoDB.get(this.collection, id);

    return user;
  }
  async createUser(user) {
    const { name, lastname } = user;

    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      lastname,
    });

    return createUserId;
  }

  async updateUser(id, data) {
    const updatedUser = await this.mongoDB.update(this.collection, id, data);
    return updatedUser;
  }

  async deleteUser(id) {
    const deletedUser = await this.mongoDB.delete(this.collection, id);
    return deletedUser;
  }
}

module.exports = UsersService;
