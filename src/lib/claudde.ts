export const openBookingChat = () => {
  let opened = false;

  try {
    if (window.Claudde?.open) {
      window.Claudde?.open();
      opened = true;
    }
  } catch {
    opened = false;
  }

  if (!opened) {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }
};
