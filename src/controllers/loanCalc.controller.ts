import { Request, Response } from "express";
import LoanCalculate from "../services/loanCalc.service";

export default class LoanController {
  public static async show(req: Request, res: Response) {
    const data = req.body;
    const loanValues = await LoanCalculate.execute(data);

    return res.status(200).json(loanValues);
  }
}
