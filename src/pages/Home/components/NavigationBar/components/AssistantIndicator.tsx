import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';

export function AssistantIndicator() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { isConnected } = useStore((state) => state.socket);

  function handleOpenPopover() {
    setIsPopoverOpen(true);
  }

  function handleClosePopover() {
    setIsPopoverOpen(false);
  }

  return (
    <Popover open={isPopoverOpen}>
      <PopoverTrigger
        onClick={handleOpenPopover}
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
        className={cn(
          'absolute right-8 top-1/2 h-[6px] w-[6px] -translate-y-1/2 cursor-default rounded-full',
          isConnected ? 'animate-pulse bg-[#28A745]' : 'bg-[#FFA78D]',
        )}
      />

      <PopoverContent sideOffset={10} className="w-fit">
        <p>{isConnected ? 'Copilot conectado' : 'Copilot desconectado'}</p>
      </PopoverContent>
    </Popover>
  );
}
