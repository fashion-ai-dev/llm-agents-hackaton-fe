import { SquarePen } from 'lucide-react';
import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';

export function NewConversationButton() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { hasConversation } = useStore((state) => state.chat);

  function handleOpenPopover() {
    setIsPopoverOpen(true);
  }

  function handleClosePopover() {
    setIsPopoverOpen(false);
  }

  function handleNewConversation() {}

  return (
    <Popover open={isPopoverOpen}>
      <PopoverTrigger
        className={cn(!hasConversation && 'opacity-40')}
        onClick={handleNewConversation}
        disabled={!hasConversation}
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
      >
        <SquarePen size={20} />
      </PopoverTrigger>

      <PopoverContent sideOffset={6} className="w-fit">
        <p>Nova conversa</p>
      </PopoverContent>
    </Popover>
  );
}
