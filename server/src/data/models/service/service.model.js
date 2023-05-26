import { Model } from 'objection';
import { join, resolve } from 'path';
import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';
import { Order as OrderModel } from '../order/order.model.js';
import { OrderToService as OrderToServiceModel } from '../order-to-service/order-to-service.model.js';

class Service extends AbstractModel {
  static get tableName() {
    return DbTableName.SERVICES;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      required: ['title', 'price'],
      properties: {
        ...baseSchema.properties,
        title: { type: 'string' },
        price: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    return {
      // orderServices: {
      //   relation: Model.HasManyRelation,
      //   modelClass: OrderToServiceModel,
      //   join: {
      //     from: `${DbTableName.ORDERS}.id`,
      //     to: `${DbTableName.ORDERS_TO_SERVICES}.serviceId`
      //   }
      // },
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderModel,
        join: {
          from: `${DbTableName.SERVICES}.id`,
          // through: {
          //   from: `${DbTableName.ORDERS_TO_SERVICES}.serviceId`,
          //   to: `${DbTableName.ORDERS_TO_SERVICES}.orderId`
          // },
          to: `${DbTableName.ORDERS}.id`
        }
      }
    };
  }
}

export { Service };
