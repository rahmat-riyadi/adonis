import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Patient from 'App/Models/Patient'

export default class PatientsController {
  public async index({ view, request, response }: HttpContextContract) {
    if (request.ajax()) {
      const { perpage, page, query } = request.qs()
      const data = await Patient.query()
        .if(query.length, (q) => q.whereLike('name', `%${query}%`))
        .paginate(page ?? 1, perpage)
      return response.json(data)
    }

    return view.render('patient/index')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('patient/form')
  }
}
