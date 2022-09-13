import { Express } from 'express'
import loanRoute from './loan'

export const appRoutes = (app: Express) => {
app.use("/loan", loanRoute)
}