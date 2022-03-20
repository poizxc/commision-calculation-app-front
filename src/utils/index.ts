import { CommisionformValues, CalculationRequestBody } from '../types';

export const mapCalculationData = (
  calculationData: CommisionformValues
): CalculationRequestBody => ({
  currency: calculationData.currency,
  date: calculationData.date,
  client_id: calculationData.clientId,
  amount: String(calculationData.amount),
});
