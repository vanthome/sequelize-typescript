import { ThroughOptions as OriginThroughOptions } from 'sequelize';
declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export declare type ThroughOptions = Optional<OriginThroughOptions<any>, 'model'>;
export {};
