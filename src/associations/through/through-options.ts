import { ThroughOptions as OriginThroughOptions } from 'sequelize';
// import { ModelClassGetter } from '../../model/shared/model-class-getter';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

// export type ThroughOptions<TCreationAttributes, TModelAttributes> = {
//   [K in keyof OriginThroughOptions<Model>]: K extends 'model'
//     ? ModelClassGetter<TCreationAttributes, TModelAttributes> | string
//     : OriginThroughOptions<Model>[K];
// };

export type ThroughOptions = Optional<OriginThroughOptions<any>, 'model'>;
