// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  if (typeof window === 'undefined') return;

  const tryAPIs = () => {
    try { (window as any).BotPenguin?.open?.(); } catch {}
    try { (window as any).BotPenguin?.show?.(); } catch {}
    try { (window as any).botpenguin?.open?.(); } catch {}
    try { (window as any).botpenguin?.show?.(); } catch {}
  };

  const tryClickLauncher = () => {
    const selectors = [
      '#BotPenguin-messenger-root + div button',
      '.bp-widget-btn',
      '.bp-launcher',
      '[class*="botpenguin"][role="button"]',
      'button[aria-label*="chat"]',
      'button[title*="chat"]',
      'div[id*="botpenguin"][role="button"]',
      '[id*="messenger-widget"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) {
        console.log('Opening chatbot via selector:', sel);
        el.click();
        return true;
      }
    }
    const candidates = Array.from(
      document.querySelectorAll(
        '[id*="botpenguin"], [class*="botpenguin"], [id*="messenger"], [class*="messenger"]'
      )
    ) as HTMLElement[];
    const launcher = candidates.find(
      (e) => typeof e.click === 'function' && getComputedStyle(e).position === 'fixed'
    );
    if (launcher) {
      console.log('Opening chatbot via fixed candidate');
      launcher.click();
      return true;
    }
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
    if (tryClickLauncher()) {
      clearInterval(timer);
    } else if (Date.now() - start > maxMs) {
      clearInterval(timer);
      console.log('Chat widget not found, scrolling to booking section');
      const bookingSection = document.getElementById('book');
      bookingSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, interval);
};