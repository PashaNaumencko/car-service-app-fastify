import { Model } from 'objection';
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
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: OrderModel,
        join: {
          from: `${DbTableName.SERVICES}.id`,
          through: {
            from: `$${DbTableName.ORDERS_TO_SERVICES}.orderId`,
            to: `${DbTableName.ORDERS_TO_SERVICES}.serviceId`,
            modelClass: OrderToServiceModel
          },
          to: `${DbTableName.ORDERS}.id`
        }
      }
    };
  }
}

export { Service };
