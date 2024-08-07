import { HasOneOptions } from 'sequelize';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
export declare function HasOne<TCreationAttributes, TModelAttributes>(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, foreignKey?: string): Function;
export declare function HasOne<TCreationAttributes, TModelAttributes>(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, options?: HasOneOptions<string, string>): Function;
