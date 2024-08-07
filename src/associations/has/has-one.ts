import { HasOneOptions } from 'sequelize';

import { HasAssociation } from './has-association';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { addAssociation, getPreparedAssociationOptions } from '../shared/association-service';
import { Association } from '../shared/association';

export function HasOne<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  foreignKey?: string
): Function;

export function HasOne<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  options?: HasOneOptions<string, string>
): Function;

export function HasOne<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  optionsOrForeignKey?: string | HasOneOptions<string, string>
): Function {
  return (target: any, propertyName: string) => {
    const options: HasOneOptions<string, string> =
      getPreparedAssociationOptions(optionsOrForeignKey);
    if (!options.as) options.as = propertyName;
    addAssociation(target, new HasAssociation(associatedClassGetter, options, Association.HasOne));
  };
}
