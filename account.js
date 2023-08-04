const db = require('./database.js');

module.exports = {
  updateAccount: function(account) {
    // Implement your account update logic here
    // For example, you might update the user's password
    let sql = `UPDATE users SET password = ? WHERE id = ?`;
    let params = [account.password, account.id];

    db.run(sql, params, function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
    });
  }
};