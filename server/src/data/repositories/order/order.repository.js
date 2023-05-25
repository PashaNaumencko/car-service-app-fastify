import { Abstract } from '../abstract/abstract.repository.js';

class Order extends Abstract {
  constructor({ orderModel }) {
    super(orderModel);
  }

  getOrders() {
    return this.model
      .query()
      .select('orders.*')
      .withGraphFetched('[workshop, car, services]')
      .orderBy('createdAt', 'desc');
  }

  changeStatus(id, status) {
    return this.model.query().patch({ status }).where({ id });
  }
}

export { Order };
