
'use client';

import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export function ChatNowButton() {
  const openChatBot = () => {
    const trigger = document.getElementById('chatbot-trigger-button');
    if (trigger) {
      trigger.click();
    }
  };

  return (
    <Button size="lg" variant="secondary" onClick={openChatBot}>
      <Bot className="mr-2 h-5 w-5" />
      Chat with my AI
    </Button>
  );
}
