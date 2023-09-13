import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import * as dotenv from 'dotenv'
dotenv.config()

const server = express()
const port = process.env.PORT || 3333

import { router } from './routes'
import errorHandler from './middlewares/error-handler'

// CORS middleware configuration
server.use(cors())

// Body Parser middleware configuration
server.use(express.json())

// Log middleware configuration
server.use(morgan('dev'))

// Routing configuration
server.use(router)

// Errors Handler middleware configuration
server.use(errorHandler)

server.listen(port, () => {
    const date = new Date()
    console.log(`Node server started in ${date.toLocaleString()} at http://localhost:${port}`)
})

export { server }