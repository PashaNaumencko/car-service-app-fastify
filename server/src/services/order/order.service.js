class Order {
  constructor({ orderRepository, orderToServiceService }) {
    this._orderRepository = orderRepository;
    this._orderToServiceService = orderToServiceService;
  }

  async create({ services, ...order }) {
    const createdOrder = await this._orderRepository.create(order);

    const orderToServiceServices = services.map(service => {
      return this._orderToServiceService.create({
        orderId: createdOrder.id,
        serviceId: service.id
      });
    });

    await Promise.all(orderToServiceServices);

    return createdOrder;
  }

  changeStatus(id, { status }) {
    return this._orderRepository.changeStatus(id, status);
  }

  getAllByUserId(userId) {
    return this._orderRepository.getOrdersByUserId(userId);
  }
}

export { Order };
