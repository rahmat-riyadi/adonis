import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DoctorsController {
  public async index({ view }: HttpContextContract) {
    return view.render('doctor/index')
  }
}
