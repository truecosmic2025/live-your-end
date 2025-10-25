// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  if (typeof window === 'undefined') return;

  const tryAPIs = () => {
    try { (window as any).BotPenguin?.open?.(); } catch {}
    try { (window as any).BotPenguin?.show?.(); } catch {}
    try { (window as any).botpenguin?.open?.(); } catch {}
    try { (window as any).botpenguin?.show?.(); } catch {}
  };

  const tryPostMessage = () => {
    const iframes = Array.from(
      document.querySelectorAll('iframe[src*="window-"], iframe[src*="botpenguin"]')
    ) as HTMLIFrameElement[];
    let sent = false;
    for (const iframe of iframes) {
      const win = iframe.contentWindow;
      if (win) {
        try {
          win.postMessage({ type: 'OPEN', source: 'parent' }, '*');
          win.postMessage({ type: 'open' }, '*');
          win.postMessage('OPEN', '*');
          win.postMessage({ action: 'OPEN_WIDGET' }, '*');
          sent = true;
        } catch {}
      }
    }
    return sent;
  };

  const tryClickLauncher = () => {
    const selectors = [
      '.bp-widget-btn',
      '.bp-launcher',
      'button[aria-label*="chat"]',
      'button[title*="chat"]',
      '[class*="botpenguin"][role="button"]',
      'div[role="button"][class*="launcher"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) {
        console.log('Opening chatbot via selector:', sel);
        el.click();
        el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        return true;
      }
    }
    // Avoid clicking the script tag
    return false;
  };

  // Ensure the script is present (in case this runs before section mounts)
  if (!document.getElementById('messenger-widget-b')) {
    const script = document.createElement('script');
    script.id = 'messenger-widget-b';
    script.src = 'https://cdn.botpenguin.com/website-bot.js';
    script.defer = true;
    script.textContent = '6880c7ac63793209fdd9fbf7,6862add8833c9f93263e210e';
    document.body.appendChild(script);
  }

  // Retry for a few seconds to allow widget to initialize
  const start = Date.now();
  const maxMs = 4000;
  const interval = 200;

  tryAPIs();
  const timer = setInterval(() => {
    tryAPIs();
    const clicked = tryClickLauncher();
    const posted = tryPostMessage();
    if (clicked || posted) {
      clearInterval(timer);
    } else if (Date.now() - start > maxMs) {
      clearInterval(timer);
      console.log('Chat widget not found, scrolling to booking section');
      const bookingSection = document.getElementById('book');
      bookingSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, interval);
};