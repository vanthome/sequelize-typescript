import 'reflect-metadata';
import { BelongsToOptions, HasOneOptions, HasManyOptions } from 'sequelize';
import { BaseAssociation } from './base-association';
export declare type NonBelongsToManyAssociationOptions = BelongsToOptions<string, string> | HasManyOptions<string, string> | HasOneOptions<string, string>;
export declare function getPreparedAssociationOptions(optionsOrForeignKey?: string | NonBelongsToManyAssociationOptions): NonBelongsToManyAssociationOptions;
/**
 * Stores association meta data for specified class
 */
export declare function addAssociation<TCreationAttributes, TModelAttributes>(target: any, association: BaseAssociation<TCreationAttributes, TModelAttributes>): void;
/**
 * Returns association meta data from specified class
 */
export declare function getAssociations<TCreationAttributes, TModelAttributes>(target: any): BaseAssociation<TCreationAttributes, TModelAttributes>[] | undefined;
export declare function setAssociations<TCreationAttributes, TModelAttributes>(target: any, associations: BaseAssociation<TCreationAttributes, TModelAttributes>[]): void;
export declare function getAssociationsByRelation<TCreationAttributes, TModelAttributes>(target: any, relatedClass: any): BaseAssociation<TCreationAttributes, TModelAttributes>[];
