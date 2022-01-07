import { useContext } from "react";
import { CurrencyContext, CurrencyProviderValue } from "../providers/CurrencyProvider";

const useCurrency = () => useContext<CurrencyProviderValue>(CurrencyContext);

export default useCurrency;