import { BelongsToOptions } from 'sequelize';

import { BelongsToAssociation } from './belongs-to-association';
import { ModelClassGetter } from '../../model/shared/model-class-getter';
import { addAssociation, getPreparedAssociationOptions } from '../shared/association-service';

export function BelongsTo<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  foreignKey?: string
): Function;

export function BelongsTo<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  options?: BelongsToOptions<string, string>
): Function;

export function BelongsTo<TCreationAttributes, TModelAttributes>(
  associatedClassGetter: ModelClassGetter<TCreationAttributes, TModelAttributes>,
  optionsOrForeignKey?: string | BelongsToOptions<string, string>
): Function {
  return (target: any, propertyName: string) => {
    const options: BelongsToOptions<string, string> =
      getPreparedAssociationOptions(optionsOrForeignKey);
    if (!options.as) options.as = propertyName;
    addAssociation(target, new BelongsToAssociation(associatedClassGetter, options));
  };
}
