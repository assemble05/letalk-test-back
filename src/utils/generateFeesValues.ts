import { IFeesMonth, IGenerateFees } from "../interfaces";
import { transformCurrencyToBrl } from "./ptBrMoney";

const GenerateFees = ({
  portion,
  value,
  calculatedPorcentage,
}: IGenerateFees) => {
  let installments = [];

  while (value !== 0) {
    if (value > 0) {
      let fess = porcentageCalculate(calculatedPorcentage, value);
      value += fess;

      installments.push({
        debt: transformCurrencyToBrl(value),
        debit_value: transformCurrencyToBrl(value - fess),
        fees: transformCurrencyToBrl(fess),
        installment: transformCurrencyToBrl(portion),
      });

      value -= portion;

      if (value < portion) {
        let fess = porcentageCalculate(calculatedPorcentage, portion);
        portion = value += fess;
        value = 0;

        installments.push({
          debt: transformCurrencyToBrl(portion - fess),
          debit_value: transformCurrencyToBrl(portion),
          fees: transformCurrencyToBrl(fess),
          installment: transformCurrencyToBrl(portion),
        });

        installments.push({
          debt: transformCurrencyToBrl(0),
          debit_value: transformCurrencyToBrl(0),
          fees: transformCurrencyToBrl(0),
          installment: transformCurrencyToBrl(0),
        });
      }
    }
  }

  return installments;
};
export default GenerateFees;

export const monthCalculate = ({ fees }: IFeesMonth) => {
  const date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let twoDigitsYear = Number(year.toString().substr(-2));
  const parcelasDates = fees.map((value) => {
    if (month >= 12) {
      month = 0;
      twoDigitsYear++;
    }
    month++;
    const { debit_value, fees, debt, installment } = value;

    const date = {
      debit_value,
      fees,
      debt,
      installment,
      month: `${month}/${twoDigitsYear}`,
    };

    return date;
  });

  return parcelasDates;
};

export const getPorcentageBasedOnUF = (uf: string) => {
  let porcentage = 0;
  switch (uf) {
    case "MG":
      return (porcentage = 1.0);
    case "SP":
      return (porcentage = 0.8);
    case "RJ":
      return (porcentage = 0.9);
    case "ES":
      return (porcentage = 1.11);
    default:
      return 0;
  }
};

const porcentageCalculate = (
  feesPorcentage: number,
  valueToCalculate: number
) => {
  return feesPorcentage * (valueToCalculate / 100);
};
