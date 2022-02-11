import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import User from 'App/Models/User'
import Country from 'App/Models/Country'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const country = await Country.query().preload('posts')

    return response.ok({ country })
  }
  public async CountryRegister({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'locale'])

    const user = await Country.create(data)

    return response.created({ user })
  }
  public async UserRegister({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password'])

    const user = await User.create(data)

    return response.created({ user })
  }
  public async PostRegister({ request, response }: HttpContextContract) {
    const data = request.only(['userId', 'title', 'body'])

    const post = await Post.create(data)

    return response.created({ post })
  }
  public async delete({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
