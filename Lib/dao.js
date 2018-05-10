const mongoClient = require('mongodb').MongoClient;

let db;

class dao {
  static async createConnection() {
    try {
      const client = await mongoClient.connect(process.env.MONGO_URI);
      db = await client.db(process.env.MONGO_DB);
      return db;
    } catch (error) {
      throw error;
    }
  }

  static async insertData(model, data) {
    try {
      data = await db.collection(model).insert(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async fetchData(model, query, projection, options) {
    try {
      const cursor = await db.collection(model).find(query, projection, options);
      if ('skip' in options) {
        cursor.skip(options.skip);
      }
      if ('limit' in options) {
        cursor.limit(options.limit);
      }
      if ('sort' in options) {
        cursor.sort(options.sort);
      }
      return cursor.toArray();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = dao;
