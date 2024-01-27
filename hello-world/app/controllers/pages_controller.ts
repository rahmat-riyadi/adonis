import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async index({ view }: HttpContext) {
    return view.render('pages/index')
  }

  async about({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/about', {
      users,
    })
  }
}
