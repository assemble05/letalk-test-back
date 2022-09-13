export interface ILoanData {
  cpf: string;
  uf: string;
  birth_date: string;
  value: number;
  portion: number;
}

export interface IFeesArrayContent {
  debit_value: string;
  fees: string;
  debt: string;
  installment: string;
}
export interface IFeesMonth {
  fees: IFeesArrayContent[];
}

export interface IGenerateFees {
  portion: number;
  value: number;
  calculatedPorcentage: number;
}
