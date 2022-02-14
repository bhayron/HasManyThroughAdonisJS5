import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Country from './Country'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column()
  public title: string

  @column()
  public body: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Country)
  public country: BelongsTo<typeof Country>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
