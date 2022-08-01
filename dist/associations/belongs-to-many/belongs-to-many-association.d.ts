import { BaseAssociation } from '../shared/base-association';
import { BelongsToManyOptions as OriginBelongsToManyOptions } from 'sequelize';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { Association } from '../shared/association';
import { Sequelize } from '../../sequelize/sequelize/sequelize';
import { UnionAssociationOptions } from '../shared/union-association-options';
import { ModelType } from '../../model/model/model';
export declare class BelongsToManyAssociation<TCreationAttributes, TModelAttributes, TCreationAttributesThrough, TModelAttributesThrough> extends BaseAssociation<TCreationAttributes, TModelAttributes> {
    protected options: OriginBelongsToManyOptions<string, string>;
    constructor(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, options: OriginBelongsToManyOptions<string, string>);
    getAssociation(): Association;
    getSequelizeOptions(model: ModelType<TCreationAttributes, TModelAttributes>, sequelize: Sequelize): UnionAssociationOptions;
    private getThroughOptions;
}
