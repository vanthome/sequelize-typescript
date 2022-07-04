import { BelongsToOptions, HasManyOptions, HasOneOptions, BelongsToManyOptions } from 'sequelize';

export type UnionAssociationOptions =
  | BelongsToOptions<string, string>
  | HasManyOptions<string, string>
  | HasOneOptions<string, string>
  | BelongsToManyOptions<any, any, any>;
