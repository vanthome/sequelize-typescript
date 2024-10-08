import { BelongsToOptions } from 'sequelize';
import { BaseAssociation } from '../shared/base-association';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { Association } from '../shared/association';
import { ModelType } from '../../model/model/model';
import { UnionAssociationOptions } from '../shared/union-association-options';
export declare class BelongsToAssociation<TCreationAttributes, TModelAttributes> extends BaseAssociation<TCreationAttributes, TModelAttributes> {
    protected options: BelongsToOptions<string, string>;
    constructor(associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>, options: BelongsToOptions<string, string>);
    getAssociation(): Association;
    getSequelizeOptions(model: ModelType<TCreationAttributes, TModelAttributes>): UnionAssociationOptions;
}
