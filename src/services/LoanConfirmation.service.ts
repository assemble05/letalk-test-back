import { AppDataSource } from "../data-source";
import { Loan } from "../entities/loan.entity";
import { ILoanData } from "../interfaces";
import LoanCalculate from "./loanCalc.service";

export default class LoanConfirmation {
    public static async execute(data : ILoanData) {
    const loanRepo = AppDataSource.getRepository(Loan);

    const loanValues = await LoanCalculate.execute(data);
    const {amountPeerMonth,cpf,fees,fessPerMonth,installments,monthToPay,required_value,totalToPay} = loanValues
    const newval = {
        amountPeerMonth: amountPeerMonth,
        cpf : cpf,
        fees : fees,
        fessPerMonth : fessPerMonth,
        installments : JSON.stringify(installments) ,
        monthToPay : monthToPay,
        required_value : required_value,
        totalToPay : totalToPay 



    }
    const newLoan = loanRepo.create(loanValues);
    await loanRepo.save(newLoan);

    return newLoan;
    }
  }
  
