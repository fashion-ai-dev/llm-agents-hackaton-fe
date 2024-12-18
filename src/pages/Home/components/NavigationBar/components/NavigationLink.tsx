import { MouseEvent, ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';

import { AssistantIndicator } from './AssistantIndicator';
import { UpgradeFlag } from './UpgradeFlag';

interface NavigationItemProps {
  to: string;
  isAssistant?: boolean;
  isInBeta?: boolean;
  unavailable?: boolean;
  children: ReactNode;
}

export function NavigationLink({
  to,
  isAssistant = false,
  isInBeta = false,
  unavailable = false,
  children,
}: NavigationItemProps) {
  const { pathname } = useLocation();

  function handleClick(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    if (unavailable) {
      event.preventDefault();
    }
  }

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'relative flex items-center gap-2 rounded-lg px-5 py-2 text-[#333] hover:bg-[#E8E8E8]',

            isActive &&
              !unavailable &&
              'cursor-default bg-black text-white hover:bg-black',

            unavailable && 'cursor-default hover:bg-white',
          )
        }
        onClick={handleClick}
      >
        {children}

        {isInBeta && (
          <span className="rounded-md bg-[#E1F0F2] px-2 text-xs text-black">
            Beta
          </span>
        )}

        {isAssistant && pathname === '/' && <AssistantIndicator />}

        {unavailable && <UpgradeFlag />}
      </NavLink>
    </li>
  );
}
