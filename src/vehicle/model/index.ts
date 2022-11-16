export default interface IVehicle {
  id: Number
  type: 'car' | 'motorcycle'
  licensePlate: string
  chassis: string
  renavam: string
  year: string
  category: 'basic' | 'intermediary'
  color: string
  steeringWheel: 'hydraulic' | 'manual'
  createdAt: Date
  username: string
  motor: string
}
