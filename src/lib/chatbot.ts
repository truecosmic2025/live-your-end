// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  if (typeof window === 'undefined') return;
  
  // Wait a bit for BotPenguin to load if it hasn't yet
  setTimeout(() => {
    // BotPenguin typically creates a chat bubble/button element
    // Try to find and click it
    const chatWidgets = [
      document.querySelector('[id*="botpenguin"]'),
      document.querySelector('[class*="botpenguin"]'),
      document.querySelector('[class*="chat-widget"]'),
      document.querySelector('[id*="messenger-widget"]'),
      document.querySelector('iframe[title*="bot"]'),
      document.querySelector('iframe[title*="chat"]'),
      // Sometimes BotPenguin creates a button with specific classes
      document.querySelector('.bp-widget-btn'),
      document.querySelector('.bp-launcher'),
    ];
    
    const chatWidget = chatWidgets.find(el => el !== null) as HTMLElement;
    
    if (chatWidget) {
      console.log('Opening chatbot widget');
      chatWidget.click();
    } else {
      console.log('Chat widget not found, scrolling to booking section');
      // Fallback: scroll to booking section
      const bookingSection = document.getElementById('book');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, 100);
};
