import { Request, Response } from "express";
import LoanCalculate from "../services/loanCalc.service";
import LoanConfirmation from "../services/LoanConfirmation.service";
import LoanRetrieve from "../services/loanRetrieve.service";

export default class LoanController {
  public static async show(req: Request, res: Response) {
    let data = req.body.data;
    if(data === undefined) {
      data =  req.body
    }
    const loanValues = await LoanCalculate.execute(data);

    return res.status(200).json(loanValues);
  }
  public static async store(req: Request, res: Response) {
    let data = req.body.data;
    if(data === undefined) {
      data = req.body
    }
    const loanValues = await LoanConfirmation.execute(data);

    return res.status(200).json(loanValues);
  }
  public static async index(req: Request, res: Response) {

    const loanValues = await LoanRetrieve.execute();

    return res.status(200).json(loanValues);
  }
}
