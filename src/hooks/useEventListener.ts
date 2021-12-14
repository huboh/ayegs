import { useEffect, useCallback } from 'react';

type UseEventListenerType = (eventType: keyof WindowEventMap, eventHandler: EventListener, options?: EventListenerOptions) => void;

const useEventListener: UseEventListenerType = (eventType, eventHandler, options) => {
  const memoizedEventHandler = useCallback(eventHandler, [eventType]);

  useEffect(() => {
    window.addEventListener(eventType, memoizedEventHandler, options);
  });
};

export default useEventListener;