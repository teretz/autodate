const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chat.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chat database.');
});

// Create table
db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('User table created.');
});

module.exports = db;