import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';

class Service extends AbstractModel {
  static get tableName() {
    return DbTableName.SERVICE;
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
}

export { Service };
