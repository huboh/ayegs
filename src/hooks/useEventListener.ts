import { useEffect, RefObject } from 'react';

type Event = keyof WindowEventMap;
type Target = EventTarget;

interface UseEventListenerProps<T extends Target> {
  eventType: Event | Event[];
  eventHandler: EventListener;
  eventOptions?: EventListenerOptions;
  target: T extends HTMLElement ? RefObject<T> : T;
}

const getListener = (target: Target, listenerType: Extract<keyof Target, 'addEventListener' | 'removeEventListener'>) => (
  (type: Event, listener: EventListener, options?: EventListenerOptions) => {
    target[listenerType](type, listener, options);
  }
);

const useEventListener = <T extends Target>(props: UseEventListenerProps<T>) => {
  const { target, eventType, eventHandler, eventOptions } = props;

  useEffect(() => {
    if (!target) return;
    const eventTarget: Target = (target as any).current! ?? target;
    const attachListener = getListener(eventTarget, 'addEventListener');
    const removeListener = getListener(eventTarget, 'removeEventListener');

    Array.isArray(eventType) ? eventType.forEach(event => attachListener(event, eventHandler, eventOptions)) : (
      attachListener(eventType, eventHandler, eventOptions)
    );

    return () => {
      Array.isArray(eventType) ? eventType.forEach(event => removeListener(event, eventHandler, eventOptions)) : (
        removeListener(eventType, eventHandler, eventOptions)
      );
    };

  }, [target, eventType, eventHandler, eventOptions]);
};

export default useEventListener;