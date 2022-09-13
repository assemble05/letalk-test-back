import express from "express";
import LoanController from "../../controllers/loanCalc.controller";

const loanRoute = express.Router();

loanRoute
  .route("")
  .post(LoanController.show).get(LoanController.index)

loanRoute.route("/confirmation").post(LoanController.store)

export default loanRoute;