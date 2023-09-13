import MemoryDatabase from '../infra/database/memory/Memory-Database'
import UserServices from './user/User-Services'

const database = new MemoryDatabase()

const userServices = new UserServices(database.users)

export {
    userServices
}