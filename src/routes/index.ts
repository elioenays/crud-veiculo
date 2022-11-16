import { Router } from 'express'
import vehicleRoutes from '../vehicle'

const routes = Router()

routes.use('/vehicle', vehicleRoutes)

export default routes
