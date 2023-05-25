class Car {
  constructor({ carRepository }) {
    this._carRepository = carRepository;
  }

  getCars() {
    return this._serviceRepository.getServices();
  }
}

export { Car };
