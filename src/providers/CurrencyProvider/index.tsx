import { CurrencyFormat } from '../../types';
import { useState, FC, createContext, useCallback } from 'react';

export interface CurrencyProviderValue {
  changeCurrency: (newCurrencyFormat: CurrencyFormat) => void;
  formatCurrency: (amount: string | number, format?: CurrencyFormat) => string;
}

const CurrencyContext = createContext({} as CurrencyProviderValue);

const CurrencyProvider: FC = ({ children }) => {
  const [currencyFormat, setCurrencyFormat] = useState<CurrencyFormat>({ currency: 'USD', lang: 'en-US' });

  const formatCurrency = useCallback((amount: number | string, format = currencyFormat) => (
    new Intl.NumberFormat(format.lang, {
      style: 'currency',
      currency: format.currency,
    }).format(Number(amount))
  ), [currencyFormat]);

  return (
    <CurrencyContext.Provider value={ { formatCurrency, changeCurrency: setCurrencyFormat } }>
      { children }
    </CurrencyContext.Provider>
  );
};

export {
  CurrencyProvider as default,
  CurrencyContext
};
