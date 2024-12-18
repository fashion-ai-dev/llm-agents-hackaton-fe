import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';

export function UpgradeFlag() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleOpenPopover() {
    setIsPopoverOpen(true);
  }

  function handleClosePopover() {
    setIsPopoverOpen(false);
  }

  return (
    <Popover open={isPopoverOpen}>
      <PopoverTrigger
        className="absolute right-5 top-1/2 z-10 flex h-[26px] -translate-y-1/2 cursor-default items-center justify-center rounded-xl bg-[#E1F0F2] px-2 text-sm font-light"
        onClick={handleOpenPopover}
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
      >
        upgrade
      </PopoverTrigger>

      <PopoverContent sideOffset={6} className="w-fit">
        <p>Contact Sales</p>
      </PopoverContent>
    </Popover>
  );
}
