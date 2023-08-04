const chat = require('./chat.js');
const recon = require('./recon.js');
const notification = require('./notification.js');
const messageHandler = require('./messageHandler.js');

module.exports = {
  handleUserInteraction: async function(user, message) {
    // Collect user data
    const userData = recon.collectData(user);

    // Send message to user
    await chat.sendMessage(user, message);

    // Handle new messages
    await messageHandler.handleNewMessages();

    // Send notification
    notification.sendNotification('Message sent', `Message sent to user: ${user.name}`);

    console.log(`Handled interaction with user: ${user.name}`);
  }
};