document.addEventListener('DOMContentLoaded', () => {
  // Server Controls
  document.querySelector('button[start-server]').addEventListener('click', startServer);
  document.querySelector('button[stop-server]').addEventListener('click', stopServer);
  document.querySelector('button[view-logs]').addEventListener('click', viewLogs);

  // Internal Account Management
  loadInternalAccounts();
  document.querySelector('#add-account').addEventListener('click', () => showAccountForm());
  document.querySelector('#save-account').addEventListener('click', saveAccount);
  document.querySelector('#cancel-add-account').addEventListener('click', cancelAddAccount);

  // External User Interaction
  loadExternalUsers();
  document.querySelector('#show-send-message-form').addEventListener('click', showSendMessageForm);
  document.querySelector('#send-message').addEventListener('click', sendMessage);
  document.querySelector('#cancel-send-message').addEventListener('click', cancelSendMessage);

  // Test Controls
  // Placeholder for test control functions
});

// ... Other functions ...

// External User Interaction Functions
function loadExternalUsers() {
  fetch('/admin/external-users')
    .then((response) => response.json())
    .then((users) => {
      const tableBody = document.querySelector('#external-users-table tbody');
      const userSelect = document.querySelector('#external-user-select');
      tableBody.innerHTML = '';
      userSelect.innerHTML = '';
      users.forEach((user) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = user.name;
        row.insertCell(1).textContent = user.platform;
        const actionsCell = row.insertCell(2);
        // Placeholder for actions (e.g., view conversation, send message)
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = `${user.name} (${user.platform})`;
        userSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error loading external users:', error);
    });
}

function showSendMessageForm() {
  document.querySelector('#send-message-form').style.display = 'block';
}

function sendMessage() {
  const selectedUser = document.querySelector('#external-user-select').value;
  const messageText = document.querySelector('#message-text').value;
  // Code to send the message to the server
  cancelSendMessage(); // Hide the form after sending
}

function cancelSendMessage() {
  document.querySelector('#send-message-form').style.display = 'none';
}

// Test Control Functions
// Placeholder for test control functions