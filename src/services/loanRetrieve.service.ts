import { AppDataSource } from "../data-source";
import { Loan } from "../entities/loan.entity";

export default class LoanRetrieve {
    public static async execute() {
    const loanRepo = AppDataSource.getRepository(Loan);
    const getall = await  loanRepo.find()

    return getall
    }
  }
  