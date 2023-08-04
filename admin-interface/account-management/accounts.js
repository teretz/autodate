const accounts = [];

module.exports = {
  addAccount: function(account) {
    accounts.push(account);
  },
  updateAccount: function(accountId, updatedAccount) {
    const index = accounts.findIndex(a => a.id === accountId);
    if (index !== -1) {
      accounts[index] = updatedAccount;
    }
  },
  deleteAccount: function(accountId) {
    const index = accounts.findIndex(a => a.id === accountId);
    if (index !== -1) {
      accounts.splice(index, 1);
    }
  },
  getAccounts: function() {
    return accounts;
  }
};