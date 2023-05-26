import { Model } from 'objection';
import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';
import { Order as OrderModel } from '../order/order.model.js';
import { Service as ServiceModel } from '../service/service.model.js';

class OrderToService extends AbstractModel {
  static get tableName() {
    return DbTableName.ORDERS_TO_SERVICES;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      required: ['orderId', 'serviceId'],
      properties: {
        ...baseSchema.properties,
        orderId: { type: ['integer', 'null'] },
        serviceId: { type: ['integer', 'null'] }
      }
    };
  }

  // static get relationMappings() {
  //   return {
  //     order: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: OrderModel,
  //       join: {
  //         from: `${DbTableName.ORDERS_TO_SERVICES}.orderId`,
  //         to: `${DbTableName.ORDERS}.id`
  //       }
  //     },
  //     team: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: ServiceModel,
  //       join: {
  //         from: `${DbTableName.ORDERS_TO_SERVICES}.serviceId`,
  //         to: `${DbTableName.SERVICES}.id`
  //       }
  //     }
  //   };
  // }
}

export { OrderToService };
