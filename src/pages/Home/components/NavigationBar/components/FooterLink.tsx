import { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface FooterLinkProps {
  to: string;
  children: ReactNode;
  onClick?: (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
}

export function FooterLink({ to, children, onClick }: FooterLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          'flex justify-between gap-2 rounded-lg py-2 text-[#333] hover:opacity-80',
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
