import { BaseAssociation } from '../shared/base-association';
// import { BelongsToManyOptions } from './belongs-to-many-options';
import { BelongsToManyOptions as OriginBelongsToManyOptions } from 'sequelize';
import { ModelNotInitializedError } from '../../model/shared/model-not-initialized-error';
import { getForeignKeyOptions } from '../foreign-key/foreign-key-service';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { Association } from '../shared/association';
import { Sequelize } from '../../sequelize/sequelize/sequelize';
import { UnionAssociationOptions } from '../shared/union-association-options';
import { ModelType } from '../../model/model/model';
import { ThroughOptions } from '../through/through-options';

export class BelongsToManyAssociation<
  TCreationAttributes,
  TModelAttributes,
  TCreationAttributesThrough,
  TModelAttributesThrough
> extends BaseAssociation<TCreationAttributes, TModelAttributes> {
  constructor(
    associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
    protected options: OriginBelongsToManyOptions<string, string>
  ) {
    super(associatedClassGetter, options);
  }

  getAssociation(): Association {
    return Association.BelongsToMany;
  }

  getSequelizeOptions(
    model: ModelType<TCreationAttributes, TModelAttributes>,
    sequelize: Sequelize
  ): UnionAssociationOptions {
    const options: OriginBelongsToManyOptions<string, string> = {
      ...this.options,
    };
    const associatedClass = this.getAssociatedClass();
    const throughOptions = this.getThroughOptions(sequelize);

    const throughModel =
      typeof throughOptions === 'object' && typeof throughOptions.model !== 'string'
        ? throughOptions.model
        : undefined;
    options.through = throughOptions as any;
    options.foreignKey = getForeignKeyOptions(model, throughModel as any, this.options.foreignKey);
    options.otherKey = getForeignKeyOptions(
      associatedClass,
      throughModel as any,
      this.options.otherKey
    );

    return options;
  }

  private getThroughOptions(sequelize: Sequelize): ThroughOptions | string {
    const through = this.options.through;
    const throughModel = typeof through === 'object' ? through.model : through;
    const throughOptions: ThroughOptions =
      typeof through === 'object' ? { ...through } : ({} as any);

    if (typeof throughModel === 'string') {
      const throughModelClass = sequelize.model(throughModel);
      if (!throughModelClass.isInitialized) {
        throw new ModelNotInitializedError(throughModelClass, 'Association cannot be resolved.');
      }
      throughOptions.model = throughModelClass as any;
    } else {
      return throughModel.options;
    }

    return throughOptions;
  }
}
