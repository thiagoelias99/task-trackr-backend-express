import { Router } from 'express'
import { UserController } from '../controllers/User'

const router = Router()

const path = '/users'

router.route(path)
    .post(UserController.post)
    .get(UserController.get)

router.route(`${path}/:id`)
    .get(UserController.getById)
    .put(UserController.put)
    .delete(UserController.remove)

export { router }