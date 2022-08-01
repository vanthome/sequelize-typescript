import { BelongsToManyOptions as OriginBelongsToManyOptions } from 'sequelize';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { ThroughOptions } from '../through/through-options';
export declare type BelongsToManyOptions<TCreationAttributesThrough, TModelAttributesThrough> = {
    [K in keyof OriginBelongsToManyOptions]: K extends 'through' ? ModelClassGetter<TCreationAttributesThrough, TModelAttributesThrough> | string | ThroughOptions : OriginBelongsToManyOptions[K];
};
