import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatInput.css';

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
          disabled={disabled}
          rows={1}
          aria-label="Message input"
          className="chat-input"
        />
        <button
          type="submit"
          disabled={disabled || !message.trim()}
          aria-label="Send message"
          className="send-button"
        >
          <span className="send-icon">➤</span>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
