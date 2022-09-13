import express from "express";
import LoanController from "../../controllers/loanCalc.controller";

const loanRoute = express.Router();

loanRoute
  .route("")
  .post(LoanController.show)

export default loanRoute;