import "express-async-errors"
import express from 'express'
import { appRoutes } from './routes'
import { errorMiddleware } from './middlewares/error.middleware'
const app = express()

app.use(express.json())


appRoutes(app)


app.listen(3001)

app.use(errorMiddleware)