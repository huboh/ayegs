import { createContext, FC, useState } from 'react';
import useEventListener from '../../hooks/useEventListener';

export interface NewtworkInformation {
  isOnline: boolean;
  networkSpeed: string | undefined;
  networkCondition: 'online' | 'offline';
  networkType: typeof navigatorConnection.type | undefined;
}

const navigatorConnection = navigator.connection ?? (
  (navigator as any).mozConnection ?? (navigator as any).webkitConnection
) as NetworkInformation;

const getNetworkStatus = (): NewtworkInformation => ({
  isOnline: navigator.onLine,
  networkType: navigatorConnection?.type,
  networkSpeed: (navigatorConnection as any)?.effectiveType,
  networkCondition: navigator.onLine ? 'online' : 'offline',
});

export const NetworkInformationContext = createContext(getNetworkStatus());

const NetworkInformationProvider: FC = ({ children }) => {
  const [networkStatus, setNetWorkStatus] = useState(getNetworkStatus);

  useEventListener({
    target: window,
    eventType: ['online', 'offline'],
    eventHandler: (event) => setNetWorkStatus(() => getNetworkStatus())
  });

  useEventListener({
    target: navigatorConnection,
    eventType: 'change',
    eventHandler: (event) => setNetWorkStatus(() => getNetworkStatus())
  });

  return (
    <NetworkInformationContext.Provider value={ networkStatus }>
      { children }
    </NetworkInformationContext.Provider>
  );
};

export default NetworkInformationProvider;