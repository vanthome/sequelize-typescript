import { Model, ModelOptions } from 'sequelize';
export interface TableOptions<M extends Model = Model> extends ModelOptions<M> {
    modelName?: string;
    /**
     * Enable optimistic locking.  When enabled, sequelize will add a version count attribute
     * to the model and throw an OptimisticLockingError error when stale instances are saved.
     * Set to true or a string with the attribute name you want to use to enable.
     */
    version?: boolean | string;
}
