import type { RefObject } from 'react';

import { useEventListener } from 'usehooks-ts';

type HandlerType = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: HandlerType,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, (e) => {
    const el = ref?.current;

    if (!el || el.contains(e.target as Node)) {
      return;
    }

    handler(e);
  });
}

export default useOnClickOutside;
