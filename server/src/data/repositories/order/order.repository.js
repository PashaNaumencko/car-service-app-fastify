import { Abstract } from '../abstract/abstract.repository.js';

class Order extends Abstract {
  constructor({ carModel }) {
    super(carModel);
  }

  geOrders() {
    return this.model
      .query()
      .select('orders.*')
      .withGraphFetched('[workshop, car, services]')
      .orderBy('createdAt', 'desc');
  }
}

export { Order };
