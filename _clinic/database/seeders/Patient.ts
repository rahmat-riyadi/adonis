import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PatientFactory from 'Database/factories/PatientFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await PatientFactory.createMany(100)
  }
}
