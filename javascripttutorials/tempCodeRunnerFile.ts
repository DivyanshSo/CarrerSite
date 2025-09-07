// Frontend: React ChatGPT Clone UI
import React, { useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    const res = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const botReply = await res.text();
    const botMessage = { role: 'assistant', content: botReply };
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">ChatGPT Clone</h1>
        <div className="h-80 overflow-y-scroll border p-2 mb-4">
          {messages.map((msg, i) => (
            <p key={i} className={msg.role === 'user' ? 'text-blue-600' : 'text-green-600'}>
              <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
            </p>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border px-2 py-1"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
