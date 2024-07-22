import { useUniformContext } from '@uniformdev/context-react';
import { useEffect } from 'react';

/**
 * Example hook demonstrating how to live-set a quirk value based on viewport width
 * Which can then be fed into visibility control to show or hide components based on viewport
 */
export function useSetViewportQuirk() {
  const context = useUniformContext({ throwOnMissingProvider: false });

  useEffect(() => {
    const debounce = (func: () => void, delay: number) => {
      let debounceTimer: NodeJS.Timeout;
      return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          func();
        }, delay);
      };
    };

    const debouncedHandler = debounce(() => {
      context?.context.update({
        quirks: {
          deviceType: window.innerWidth < 512 ? 'm' : window.innerWidth < 768 ? 't' : 'd',
        },
      });
    }, 50);

    debouncedHandler();
    window.addEventListener('resize', debouncedHandler);
    return () => {
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [context?.context]);
}
