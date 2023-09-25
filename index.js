import dotenv from 'dotenv'
import { mundialRoutes } from './routes/mundialRouter.js'
import errorHandler from './middlewares/errorHandler.js'
import express from 'express'

dotenv.config()

const SERVER_PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/api', mundialRoutes())

app.use(errorHandler)

app.listen(SERVER_PORT, () => {console.log('Servidor escuchando en http://localhost3000')})