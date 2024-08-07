import { HasManyOptions, HasOneOptions } from 'sequelize';
import { BaseAssociation } from '../shared/base-association';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { Association } from '../shared/association';
import { UnionAssociationOptions } from '../shared/union-association-options';
import { ModelType } from '../../model/model/model';
export declare class HasAssociation<TCreationAttributes, TModelAttributes> extends BaseAssociation<TCreationAttributes, TModelAttributes> {
    protected options: HasManyOptions<string, string> | HasOneOptions<string, string>;
    private association;
    constructor(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, options: HasManyOptions<string, string> | HasOneOptions<string, string>, association: Association);
    getAssociation(): Association;
    getSequelizeOptions(model: ModelType<TCreationAttributes, TModelAttributes>): UnionAssociationOptions;
}
