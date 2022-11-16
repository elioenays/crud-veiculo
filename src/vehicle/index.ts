import { Router } from 'express'
import VehicleController from './controllers'

const vehicleRoutes = Router()
const vehicleController = new VehicleController()

vehicleRoutes.get('/', vehicleController.findAll)
vehicleRoutes.post('/', vehicleController.create)
vehicleRoutes.get('/:id', vehicleController.findOne)
vehicleRoutes.patch('/:id', vehicleController.update)
vehicleRoutes.delete('/:id', vehicleController.delete)

export default vehicleRoutes
