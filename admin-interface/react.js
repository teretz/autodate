import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [npc, setNpc] = useState('');
  const [user, setUser] = useState('');
  const [platform, setPlatform] = useState('');

  // TODO: Implement form submission logic

  return (
    <form>
      <label>NPC:</label>
      <input type='text' value={npc} onChange={e => setNpc(e.target.value)} />
      <label>Message:</label>
      <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
      <label>User:</label>
      <input type='text' value={user} onChange={e => setUser(e.target.value)} />
      <label>Platform:</label>
      <input type='text' value={platform} onChange={e => setPlatform(e.target.value)} />
      <button type='submit'>Send</button>
    </form>
  );
};

export default MessageForm;