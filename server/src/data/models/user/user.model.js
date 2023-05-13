import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';

class User extends AbstractModel {
  static get tableName() {
    return DbTableName.USERS;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      required: ['email', 'username', 'password'],
      properties: {
        ...baseSchema.properties,
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' }
      }
    };
  }
}

export { User };
