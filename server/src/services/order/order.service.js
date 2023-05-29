class Order {
  constructor({ orderRepository, userRepository, orderToServiceService }) {
    this._orderRepository = orderRepository;
    this._userRepository = userRepository;
    this._orderToServiceService = orderToServiceService;
  }

  async create({ services, fullName, phoneNumber, ...order }) {
    const createdOrder = await this._orderRepository.create(order);

    const orderToServiceServices = services.map(service => {
      return this._orderToServiceService.create({
        orderId: createdOrder.id,
        serviceId: service.id
      });
    });

    await this._userRepository.updateUserById(createdOrder.userId, { fullName, phoneNumber });

    await Promise.all(orderToServiceServices);

    return createdOrder;
  }

  changeStatus(id, { status }) {
    return this._orderRepository.changeStatus(id, status);
  }

  assignServiceProvider(id, { serviceProviderId }) {
    return this._orderRepository.assignServiceProvider(id, serviceProviderId);
  }

  completeOrder(id, { noteByProvider }) {
    return this._orderRepository.completeOrder(id, noteByProvider);
  }

  getAllByUserId(userId) {
    return this._orderRepository.getOrdersByUserId(userId);
  }
}

export { Order };
