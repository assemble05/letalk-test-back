import express from "express";
import LoanController from "../../controllers/loanCalc.controller";

const loanRoute = express.Router();

loanRoute
  .route("")
  .post(LoanController.show)

loanRoute.route("/confirmation").post(LoanController.store)

export default loanRoute;