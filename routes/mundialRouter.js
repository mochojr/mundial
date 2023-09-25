import { Router } from 'express'
import { mundialController } from '../controllers/mundialControllers.js'

export const mundialRoutes = () => {
    const mundialRouter = Router()
    const {
        getMundial,
        getMundialById,
        createMundial,
        updateMundial,
        deleteMundial
    } = mundialController()

    mundialRouter.route('/mundial')
        .get(getMundial)
        .post(createMundial)

     mundialRouter.route('/mundial/:id')
        .get(getMundialById)
        .put(updateMundial)
        .delete(deleteMundial)

    return mundialRouter
}