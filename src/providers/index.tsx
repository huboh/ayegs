import { FC } from "react";
import QueryProvider from './QueryProvider';
import CurrencyProvider from "./CurrencyProvider";
import CartItemsProvider from "./CartItemsProvider";
import NetworkInformationProvider from "./NetworkInformationProvider";

const combineProviders = (providers: Array<FC>) => providers.reduce(
  (CombinedProviders: FC, Provider: FC) => function AppProviders({ children }) {
    return (
      <CombinedProviders>
        <Provider>
          { children }
        </Provider>
      </CombinedProviders>
    );
  }
);

const AppProviders = combineProviders([
  NetworkInformationProvider,
  QueryProvider,
  CartItemsProvider,
  CurrencyProvider,
]);

export default AppProviders;