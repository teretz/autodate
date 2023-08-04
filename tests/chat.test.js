const { sendMessage, receiveMessage } = require('../chat.js');
const puppeteer = require('puppeteer');

// Mock user and message for testing
const testUser = { id: '12345' };
const testMessage = 'Hello, Test User!';

// Mock Puppeteer's launch method
jest.mock('puppeteer', () => ({
  launch: jest.fn(() => ({
    newPage: jest.fn(() => ({
      goto: jest.fn(),
      type: jest.fn(),
      click: jest.fn(),
      waitForNavigation: jest.fn(),
      evaluate: jest.fn(() => ['Test Message'])
    })),
    close: jest.fn()
  }))
}));

describe('Chat Functions', () => {
  jest.setTimeout(30000); // Increase timeout for Puppeteer tests

  test('sendMessage sends a message to a user', async () => {
    await sendMessage(testUser, testMessage);
    expect(puppeteer.launch).toHaveBeenCalled();
    expect(puppeteer.launch().newPage().goto).toHaveBeenCalledWith(`https://www.meetme.com/user/${testUser.id}`);
    expect(puppeteer.launch().newPage().type).toHaveBeenCalledWith('#message-input', testMessage);
    expect(puppeteer.launch().newPage().click).toHaveBeenCalledWith('#send-button');
  });

  test('receiveMessage retrieves new messages', async () => {
    const messages = await receiveMessage();
    expect(puppeteer.launch).toHaveBeenCalled();
    expect(puppeteer.launch().newPage().goto).toHaveBeenCalledWith('https://www.meetme.com/chat');
    expect(messages).toEqual(['Test Message']);
  });
});