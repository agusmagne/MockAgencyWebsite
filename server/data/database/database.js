const mongoose = require("mongoose");
const server = "127.0.0.1:27017";
const database = "testDB";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Connected to database: ${server}/${database}`);
      })
      .catch((err) => {
        console.error("Database connection error", err);
      });
  }
}

module.exports = new Database();
