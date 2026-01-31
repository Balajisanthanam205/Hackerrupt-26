# Women Safety AI Chatbot 🛡️

A comprehensive Women Safety Chatbot powered by Google Gemini 2.0 Flash API. This chatbot provides 24/7 support and guidance on women safety topics.

![Women Safety AI Chatbot](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Gemini AI](https://img.shields.io/badge/Gemini-2.0%20Flash-red)

## ✨ Features

- **Real-time Chat**: Powered by Google Gemini AI API
- **Women Safety Focused**: Specialized responses on personal safety, emergencies, legal rights, self-defense, and mental health support
- **Professional Red & Black Theme**: Beautiful dark mode UI with red accents for emergency alerts
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Zero Errors**: Production-ready code with comprehensive error handling
- **Accessibility**: Full ARIA labels and keyboard support
- **24/7 Availability**: Always-on assistant for women safety guidance

## 🎯 Core Components

1. **WomenSafetyChatbot.jsx** - Main chatbot container with message management
2. **ChatMessage.jsx** - Message display with markdown support
3. **ChatInput.jsx** - Input field with auto-expanding textarea
4. **LoadingSpinner.jsx** - Beautiful loading indicator
5. **geminiService.js** - Google AI API integration with full error handling

## 🛠️ Technical Stack

- **React.js** - UI framework
- **Google Gemini 2.0 Flash API** - AI-powered responses
- **React Markdown** - Rich text support for formatted responses
- **CSS3 with Flexbox** - Responsive styling
- **Vite** - Build tool and development server

## 🎨 Styling

- Professional Red & Black theme (#1a1a1a, #0d0d0d, #d32f2f, #ff6b6b)
- Smooth animations and transitions
- Perfect alignment on all screen sizes
- Emergency indicators with red highlights
- Status indicators for availability

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Hackerrupt-26
```

2. Install dependencies:
```bash
npm install
```

3. Set up your API key:
   - Copy `.env.example` to `.env`
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Add your API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:3000`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Security

- API key is stored securely in environment variables
- All sensitive data is kept private
- Comprehensive error handling prevents data leaks
- Safety settings configured for sensitive topics

## 🤖 AI Integration

The chatbot uses Google's Gemini 2.0 Flash model with:
- System prompt focused on women safety guidance
- Conversation history context (last 6 messages)
- Safety settings configured for sensitive topics
- Full error handling and validation

### Topics Covered

- Personal safety tips and strategies
- Emergency response guidance
- Legal rights and protections
- Self-defense techniques and awareness
- Mental health support and resources
- Domestic violence assistance
- Sexual harassment prevention
- Workplace safety
- Travel safety for women
- Online safety and privacy

## 📱 Responsive Design

- **Desktop**: Full-featured experience with sidebar and expanded content
- **Tablet**: Optimized layout with adjusted spacing
- **Mobile**: Touch-friendly interface with collapsed navigation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚠️ Important Notes

- For immediate emergencies, always call 911 (or your local emergency number) first
- This chatbot provides information and guidance, not professional medical or legal advice
- All conversations are private and not stored on servers

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for Women's Safety**
