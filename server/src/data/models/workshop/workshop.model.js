import { Model } from 'objection';
import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';
import { Image as ImageModel } from '../image/image.model.js';
import { User as UserModel } from '../user/user.model.js';

class Workshop extends AbstractModel {
  static get tableName() {
    return DbTableName.WORKSHOPS;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      required: ['name', 'description', 'address', 'website', 'phoneNumber', 'adminId', 'imageId'],
      properties: {
        ...baseSchema.properties,
        name: { type: 'string' },
        description: { type: 'string' },
        address: { type: 'string' },
        website: { type: 'string' },
        phoneNumber: { type: 'string' },
        imageId: { type: ['integer', 'null'] },
        adminId: { type: ['integer', 'null'] }
      }
    };
  }

  static get relationMappings() {
    return {
      image: {
        relation: Model.HasOneRelation,
        modelClass: ImageModel,
        join: {
          from: `${DbTableName.WORKSHOPS}.imageId`,
          filter: query => query.select('id', 'link'),
          to: `${DbTableName.IMAGES}.id`
        }
      },
      admin: {
        relation: Model.HasOneRelation,
        modelClass: UserModel,
        filter: query => query.select('id', 'username'),
        join: {
          from: `${DbTableName.WORKSHOPS}.adminId`,
          to: `${DbTableName.USERS}.id`
        }
      }
    };
  }
}

export { Workshop };
