import { Abstract } from '../abstract/abstract.repository.js';

class Workshop extends Abstract {
  constructor({ workshopModel }) {
    super(workshopModel);
  }

  getWorkshops() {
    return this.model
      .query()
      .select('posts.*')
      .withGraphFetched('[image]')
      .orderBy('createdAt', 'desc');
  }

  getWorkshopById(id) {
    return this.model
      .query()
      .select('posts.*')
      .where({ id })
      .withGraphFetched('[admin, image]')
      .first();
  }
}

export { Workshop };
