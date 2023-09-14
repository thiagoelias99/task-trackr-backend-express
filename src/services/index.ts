import * as dotenv from 'dotenv'
dotenv.config()

import MemoryDatabase from '../infra/database/memory/Memory-Database'
import UserServices from './user/User-Services'

const environment = process.env.ENVIRONMENT || 'development'

console.log(`environment: ${environment}`)
const database = new MemoryDatabase()

const userServices = new UserServices(database.users)

export {
    userServices
}