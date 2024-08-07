import { ForeignKeyOptions } from 'sequelize';
import { ForeignKeyMeta } from './foreign-key-meta';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { ModelType } from '../../model/model/model';
export declare function getForeignKeyOptions<TCreationAttributes, TModelAttributes, TCreationAttributesThrough, TModelAttributesThrough>(relatedClass: ModelType<TCreationAttributes, TModelAttributes>, classWithForeignKey?: ModelType<TCreationAttributesThrough, TModelAttributesThrough>, foreignKey?: string | ForeignKeyOptions<string>): ForeignKeyOptions<string>;
/**
 * Adds foreign key meta data for specified class
 */
export declare function addForeignKey<TCreationAttributes, TModelAttributes>(target: any, relatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, foreignKey: string): void;
/**
 * Returns foreign key meta data from specified class
 */
export declare function getForeignKeys<TCreationAttributes, TModelAttributes>(target: any): ForeignKeyMeta<TCreationAttributes, TModelAttributes>[] | undefined;
