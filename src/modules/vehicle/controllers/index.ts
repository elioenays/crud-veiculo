import { Request, Response } from 'express'
import IVehicle from '../model'
import VehicleService from '../services'

const vehicleService = new VehicleService()
export default class VehicleController {
  public async create(request: Request, response: Response) {
    const data: IVehicle = request.body

    const vehicle = await vehicleService.create(data)

    return response.json(vehicle)
  }

  public async findAll(request: Request, response: Response) {
    const vehicles = await vehicleService.findAll()

    return response.json(vehicles)
  }
  public async findOne(request: Request, response: Response) {
    const { id } = request.params

    const vehicle = await vehicleService.findOne(id)

    return response.json(vehicle)
  }

  public async update(request: Request, response: Response) {}

  public async delete(request: Request, response: Response) {
    const { id } = request.params

    const vehicle = await vehicleService.delete(id)

    return response.json(vehicle)
  }
}
