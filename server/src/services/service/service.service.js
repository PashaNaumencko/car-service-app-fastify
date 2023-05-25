class Service {
  constructor({ serviceRepository }) {
    this._serviceRepository = serviceRepository;
  }

  create(workshopId, service) {
    return this._serviceRepository.create({
      ...service,
      workshopId: workshopId ?? null
    });
  }

  getServices() {
    return this._serviceRepository.getServices();
  }
}

export { Service };
