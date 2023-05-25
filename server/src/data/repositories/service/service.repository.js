import { Abstract } from '../abstract/abstract.repository.js';

class Service extends Abstract {
  constructor({ serviceModel }) {
    super(serviceModel);
  }

  getServices() {
    return (
      this.model
        .query()
        .select('services.*')
        // .withGraphFetched('[workshop]')
        .orderBy('createdAt', 'desc')
    );
  }
}

export { Service };
