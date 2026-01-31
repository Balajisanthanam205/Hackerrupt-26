import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import LoadingSpinner from './LoadingSpinner';
import { initializeGemini, sendMessage } from '../services/geminiService';
import '../styles/WomenSafetyChatbot.css';

const WomenSafetyChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const result = initializeGemini();
    if (result.success) {
      setIsInitialized(true);
      // Add welcome message
      const welcomeMessage = {
        id: Date.now(),
        role: 'assistant',
        text: `# Welcome to Women Safety AI Assistant 🛡️

I'm here to provide 24/7 support and guidance on women's safety topics. I can help you with:

- **Personal Safety** - Tips and strategies for staying safe
- **Emergency Guidance** - What to do in urgent situations
- **Legal Rights** - Information about your rights and protections
- **Self-Defense** - Awareness and techniques
- **Mental Health** - Support and resources
- **Resources** - Hotlines and professional help

⚠️ **For immediate emergencies, always call 911 (or your local emergency number) first.**

How can I assist you today?`,
        timestamp: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
    } else {
      setError(result.error);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text) => {
    if (!isInitialized) {
      setError('Chatbot is not initialized. Please check your API key.');
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: text,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Get AI response
    const result = await sendMessage(text, messages);
    
    setIsLoading(false);

    if (result.success) {
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: result.response,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="women-safety-chatbot">
      <div className="chatbot-header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-icon">🛡️</span>
            Women Safety AI Assistant
          </h1>
          <div className="header-status">
            <span className={`status-indicator ${isInitialized ? 'online' : 'offline'}`}></span>
            <span className="status-text">{isInitialized ? '24/7 Available' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <div className="chatbot-messages" role="log" aria-live="polite" aria-label="Chat messages">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isUser={message.role === 'user'}
          />
        ))}
        {isLoading && <LoadingSpinner />}
        {error && (
          <div className="error-message" role="alert">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-footer">
        <ChatInput onSend={handleSendMessage} disabled={isLoading || !isInitialized} />
        <div className="footer-info">
          <p className="disclaimer">
            🔒 Your conversations are private. For emergencies, call 911.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WomenSafetyChatbot;
