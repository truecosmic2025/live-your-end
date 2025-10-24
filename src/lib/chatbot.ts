// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  // BotPenguin exposes a global API to control the widget
  if (typeof window !== 'undefined') {
    // Try different possible BotPenguin API methods
    if ((window as any).BotPenguin?.show) {
      (window as any).BotPenguin.show();
    } else if ((window as any).botpenguin?.show) {
      (window as any).botpenguin.show();
    } else {
      // Fallback: trigger click on the widget button if API not available
      const chatButton = document.querySelector('[id*="botpenguin"], [class*="botpenguin"], [class*="chat-widget"]') as HTMLElement;
      if (chatButton) {
        chatButton.click();
      } else {
        // Last resort: scroll to booking section
        const bookingSection = document.getElementById('book');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
};
