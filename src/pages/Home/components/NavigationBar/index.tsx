import {
  BookImage,
  ChartLine,
  Fingerprint,
  LogOut,
  Settings,
  Target,
  User,
  Wand2,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import fashionLogo from '@/assets/fashion-logo.svg';

import { AssistantIcon } from '../AssistantIcon';

import { FooterLink } from './components/FooterLink';
import { NavigationLink } from './components/NavigationLink';
import { NewConversationButton } from './components/NewConversationButton';

export function NavigationBar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden w-[282px] lg:block">
      <div className="sticky left-0 top-0 flex h-dvh w-[282px] flex-col overflow-scroll px-6 py-10 scrollbar-hide">
        <header className="mb-9 flex items-center justify-between">
          <Link to="/">
            <img
              src={fashionLogo}
              alt="Fashion.ai logo"
              className="h-[38px] w-[140px]"
            />
          </Link>

          {pathname === '/' && <NewConversationButton />}
        </header>

        <nav className="mb-[10px] flex-1">
          <ul className="flex flex-col gap-4">
            <NavigationLink to="/" isAssistant isInBeta>
              <AssistantIcon /> Copilot
            </NavigationLink>

            <NavigationLink to="/vision">
              <BookImage /> Vision
            </NavigationLink>

            <NavigationLink to="/my-style-ai">
              <Fingerprint /> My Style AI
            </NavigationLink>

            <NavigationLink to="/audiences">
              <Target /> Audiences
            </NavigationLink>

            <NavigationLink to="/crm" unavailable>
              <User /> CRM
            </NavigationLink>

            <NavigationLink to="/analytics" unavailable>
              <ChartLine /> Analytics
            </NavigationLink>

            <NavigationLink to="/stylist-ai" unavailable>
              <Wand2 /> Stylist AI
            </NavigationLink>
          </ul>
        </nav>

        <footer>
          <ul>
            <FooterLink to="/settings">
              Settings <Settings />
            </FooterLink>

            <FooterLink to="#" onClick={() => {}}>
              Logout <LogOut />
            </FooterLink>
          </ul>
        </footer>
      </div>
    </aside>
  );
}
