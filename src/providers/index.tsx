import { FC } from "react";
import CurrencyProvider from "./CurrencyProvider";

const combineProviders = (providers: Array<FC>) => providers.reduce(
  (CombinedProviders: FC, Provider: FC) => function CombinedComponent({ children }) {
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
  CurrencyProvider
]);

export default AppProviders;