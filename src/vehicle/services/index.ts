import { database } from '../../database'
import IVehicle from '../model'

const db = database()

export default class VehicleService {
  public async create(data: IVehicle) {
    const {
      type,
      licensePlate,
      chassis,
      renavam,
      year,
      category,
      color,
      steeringWheel,
      username,
      motor,
    } = data

    const vehicle = new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO crud_vehicles.vehicles (type, license_plate, chassis, renavam,
      year, category, color, steering_wheel, username, motor) VALUES (?,?,?,?,?,?,?,?,?,?);`,
        [
          type,
          licensePlate,
          chassis,
          renavam,
          year,
          category,
          color,
          steeringWheel,
          username,
          motor,
        ],
        (error, result) => {
          if (error) return reject(error)
          return resolve(result)
        },
      )
    })

    return vehicle
  }

  public async findAll() {
    const vehicles = new Promise((resolve, reject) => {
      db.query('select * from vehicles', (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return vehicles
  }

  public async findOne(id: string) {
    const vehicle = new Promise((resolve, reject) => {
      db.query(`select * from vehicles where id=${id}`, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return vehicle
  }
  public async update(id: string, data: IVehicle) {
    const {
      type,
      licensePlate,
      chassis,
      renavam,
      year,
      category,
      color,
      steeringWheel,
      username,
      motor,
    } = data

    const vehicle = new Promise((resolve, reject) => {
      db.query(
        `update vehicles set type = COALESCE(?,type), license_plate= COALESCE(?,license_plate), chassis= ?, renavam= ?,
      year= ?, category= ?, color= ?, steering_wheel= ?, username= ?, motor = ? where id=${id}`,
        [
          type,
          licensePlate,
          chassis,
          renavam,
          year,
          category,
          color,
          steeringWheel,
          username,
          motor,
        ],
        (error, result) => {
          if (error) return reject(error)
          return resolve(result)
        },
      )
    })

    return vehicle
  }

  public async delete(id: string) {
    const vehicle = new Promise((resolve, reject) => {
      db.query(`delete from vehicles where id=${id}`, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return vehicle
  }
}
