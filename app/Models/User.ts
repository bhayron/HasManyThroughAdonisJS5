import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Countries from 'Database/migrations/1644544755173_countries'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public countryId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @hasMany(() => Post)
  // public posts: HasMany<typeof Post>
}
