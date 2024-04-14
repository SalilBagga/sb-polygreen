import { Button } from '@/components/ui/button';
import React from 'react';
import { handleWhatsAppButtonClick } from 'utils/helper';

const InquireNowButton = ({ className, text }: { className?: string; text?: string }) => {
  return (
    <Button
      className={className}
      onClick={() => {
        handleWhatsAppButtonClick(text);
      }}
    >
      Inquire now
    </Button>
  );
};

export default InquireNowButton;
