import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div 
      className={`chat-message ${isUser ? 'user-message' : 'assistant-message'}`}
      role="article"
      aria-label={isUser ? 'Your message' : 'Assistant response'}
    >
      <div className="message-avatar">
        {isUser ? '👤' : '🤖'}
      </div>
      <div className="message-content">
        {isUser ? (
          <p>{message.text}</p>
        ) : (
          <ReactMarkdown>{message.text}</ReactMarkdown>
        )}
        <div className="message-time">
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
