import { FC } from "react";
import QueryProvider from './QueryProvider';
import CurrencyProvider from "./CurrencyProvider";

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
  CurrencyProvider,
  QueryProvider
]);

export default AppProviders;