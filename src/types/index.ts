export enum SupportedCurrencies {
  EUR = 'EUR',
  USD = 'USD',
  PLN = 'PLN',
}

export type CommisionformValues = {
  clientId: number;
  amount: number;
  date: Date;
  currency: SupportedCurrencies;
};

export type CalculationRequestBody = {
  client_id: number;
  amount: string;
  date: Date;
  currency: SupportedCurrencies;
};

export type CalculationRequestResponse = {
  currency: SupportedCurrencies.EUR;
  amount: string;
};

export type ResultStatus = 'inital' | 'loading' | 'error' | 'success';
