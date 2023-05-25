class Order {
  constructor({ orderRepository, orderToServiceService }) {
    this._orderRepository = orderRepository;
    this._orderToServiceService = orderToServiceService;
  }

  async create(order) {
    const createdOrder = await this._orderRepository.create(order);

    console.log('createdOrder.services', createdOrder.id);

    const orderToServiceServices = createdOrder.services.map(service => {
      return this._orderToServiceService.create({
        orderId: createdOrder.id,
        serviceId: service.id
      });
    });

    await Promise.all(orderToServiceServices);

    return createdOrder;
  }

  getAll() {
    return this._orderRepository.getOrders();
  }
}

export { Order };
