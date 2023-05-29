import { Abstract } from '../abstract/abstract.repository.js';

class Order extends Abstract {
  constructor({ orderModel }) {
    super(orderModel);
  }

  getOrdersByUserId(userId) {
    return this.model
      .query()
      .select('orders.*')
      .withGraphFetched('[workshop, car, services]')
      .where({ userId })
      .orderBy('createdAt', 'desc');
  }

  changeStatus(id, status) {
    return this.model.query().patch({ status }).where({ id });
  }

  assignProvider(id, serviceProviderId) {
    return this.model.query().patch({ serviceProviderId }).where({ id });
  }

  completeOrder(id, noteByProvider) {
    return this.model.query().patch({ noteByProvider }).where({ id });
  }
}

export { Order };
