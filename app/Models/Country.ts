import { DateTime } from 'luxon'
import { BaseModel, column, hasManyThrough, HasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public locale: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasManyThrough([() => Post, () => User], {
    throughForeignKey: 'userId',
    foreignKey: 'countryId',
    throughLocalKey: 'id',
    //  serializeAs: 'userId',
  })
  public posts: HasManyThrough<typeof Post>
}
