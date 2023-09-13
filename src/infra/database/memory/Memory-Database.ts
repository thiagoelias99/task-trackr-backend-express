import { IAppDatabase } from '../App-Database'
import UserRepository from './User-Repository'

export default class MemoryDatabase implements IAppDatabase {
    users = new UserRepository

}