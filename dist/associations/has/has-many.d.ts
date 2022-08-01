import { HasManyOptions } from 'sequelize';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
export declare function HasMany<TCreationAttributes, TModelAttributes>(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, foreignKey?: string): Function;
export declare function HasMany<TCreationAttributes, TModelAttributes>(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, options?: HasManyOptions<string, string>): Function;
