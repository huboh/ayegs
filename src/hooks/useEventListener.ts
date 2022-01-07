import { useEffect, RefObject } from 'react';

type Event = keyof WindowEventMap;
type Target = Window | HTMLElement;

interface UseEventListenerProps<T = HTMLElement> {
  target: RefObject<T>;
  eventType: Event | Event[];
  eventHandler: EventListener;
  eventOptions?: EventListenerOptions;
}

const getListener = (target: Target, listenerType: 'addEventListener' | 'removeEventListener') => (
  (type: Event, listener: EventListener, options?: EventListenerOptions) => {
    target[listenerType](type, listener, options);
  }
);

const useEventListener = (props: UseEventListenerProps) => {
  const { target, eventType, eventHandler, eventOptions } = props;

  useEffect(() => {
    const eventTarget = target.current ?? window;
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