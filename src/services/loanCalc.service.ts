import { AppError } from "../errors/appError";
import { ILoanData } from "../interfaces";
import moment from "moment";
import { removeBrlCurrency, transformCurrencyToBrl } from "../utils/ptBrMoney";
import GenerateFees, {
  getPorcentageBasedOnUF,
  monthCalculate,
} from "../utils/generateFeesValues";
export default class LoanCalculate {
  public static async execute(data: ILoanData) {
    const { birth_date, cpf, portion, uf, value } = data;

    const calculatedPorcentage = getPorcentageBasedOnUF(uf);

    const calculateMinimumValue = calculatedPorcentage * (value / 100);
    if(!value){
      throw new AppError(400, "Valor desejado necessario");
    }
    if(!portion){
      throw new AppError(400, "Valor desejado necessario");
    }
    Number(value.toFixed(2));
    Number(portion.toFixed(2));
    if (!moment(birth_date, "DD-MM-YYYY", true).isValid()) {
      throw new AppError(400, "Data de nascimento invalida");
    }

    if (portion < calculateMinimumValue) {
      throw new AppError(
        400,
        "O valor da parcela deve ser maior ou igual a 1% do valor total do emprestimo"
      );
    }

    if (calculatedPorcentage === 0) {
      throw new AppError(400, "Estado selecionado invalido");
    }

    if (value < 50000) {
      throw new AppError(
        400,
        "O valor do emprestimo deve ser maior que R$ 50.000,00"
      );
    }

    const fees = GenerateFees({ portion, value, calculatedPorcentage });

    const addMonth = monthCalculate({ fees });

    let sum = 0;
    addMonth.forEach((value) => {
      sum += removeBrlCurrency(value.fees);
    });

    const loanCalculated = {
      cpf: cpf,
      fees: transformCurrencyToBrl(sum),
      monthToPay: `${addMonth.length} MESES`,
      required_value: transformCurrencyToBrl(value),
      fessPerMonth: `${calculatedPorcentage}% ao mês`,
      amountPeerMonth: transformCurrencyToBrl(portion),
      totalToPay : transformCurrencyToBrl(sum + value),
      installments: addMonth
    };

    return loanCalculated;
  }
}
