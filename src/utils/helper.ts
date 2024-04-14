export const handleWhatsAppButtonClick = (message?: string) => {
  const phoneNumber = '917709496487';
  const url = message
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}`;

  window.open(url, '_blank');
};
