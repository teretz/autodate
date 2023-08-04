const chat = require('./chat.js');

module.exports = {
  handleNewMessages: async function() {
    const messages = await chat.receiveMessage();
    for (let message of messages) {
      // Add your logic to handle each message
      // For example, you might send a reply, store the message in a database, or trigger a notification
      console.log(`Handling message: ${message}`);
    }
  }
};