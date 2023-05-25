class Order {
  constructor({ serviceRepository }) {
    this._serviceRepository = serviceRepository;
  }

  create(workshopId, service) {
    return this._serviceRepository.create({
      ...service,
      workshopId
    });
  }

  getServices() {
    return this._serviceRepository.getServices();
  }
}

export { Order };
