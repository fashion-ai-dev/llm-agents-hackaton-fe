import { useEffect } from 'react';

import { Sheet, SheetContent } from '@/components/ui/Sheet';
import { useStore } from '@/store';

import { useChat } from '../../contexts/ChatContext';
import { useCronometer } from '../../hooks/useCronometer';

import { Cronometer } from './Cronometer';
import Logs from './Logs';

export function LogsSheet() {
  const { isChatting } = useChat();

  const { time, previousTime } = useCronometer(isChatting);

  const { isLogsOpen, setIsLogsOpen } = useStore((state) => state.chat);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === '.') {
        setIsLogsOpen(!isLogsOpen);
      }

      if (event.key === 'Escape') {
        setIsLogsOpen(false);
      }
    }

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isLogsOpen, setIsLogsOpen]);

  return (
    <Sheet open={isLogsOpen} onOpenChange={setIsLogsOpen}>
      <SheetContent
        className="sm:max-w-[768px]"
        onInteractOutside={() => setIsLogsOpen(false)}
      >
        <Logs />

        <Cronometer time={isChatting ? time : previousTime} />
      </SheetContent>
    </Sheet>
  );
}
