const conversations = [];

module.exports = {
  addConversation: function(convo) {
    conversations.push(convo);
  },
  getConversations: function() {
    return conversations;
  },
  getLastMessage: function(convoId) {
    const convo = conversations.find(c => c.id === convoId);
    return convo ? convo.messages.slice(-1)[0] : null;
  }
};