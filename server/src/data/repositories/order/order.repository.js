import { Abstract } from '../abstract/abstract.repository.js';

class Order extends Abstract {
  constructor({ orderModel }) {
    super(orderModel);
  }

  getOrdersByUserId(userId) {
    return this.model
      .query()
      .select('orders.*')
      .withGraphFetched('[workshop, car, services, user, serviceProvider]')
      .where({ userId })
      .orderBy('createdAt', 'desc');
  }

  getOrdersByAdminId(adminId) {
    return this.model
      .query()
      .select('orders.*')
      .withGraphJoined('[workshop, car, services, user, serviceProvider]')
      .where({ 'workshop.admin_id': adminId })
      .orderBy('createdAt', 'desc');
  }

  getOrdersByServiceProviderId(serviceProviderId) {
    return this.model
      .query()
      .select('orders.*')
      .withGraphJoined('[workshop, car, services, user, serviceProvider]')
      .where({ serviceProviderId })
      .orderBy('createdAt', 'desc');
  }

  changeStatus(id, status) {
    return this.model.query().patch({ status }).where({ id });
  }

  assignServiceProvider(id, serviceProviderId) {
    return this.model.query().patch({ serviceProviderId }).where({ id });
  }

  completeOrder(id, noteByProvider) {
    return this.model.query().patch({ noteByProvider, status: 'Completed' }).where({ id });
  }
}

export { Order };
