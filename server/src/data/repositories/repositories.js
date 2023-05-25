import {
  User as UserModel,
  Workshop as WorkshopModel,
  Service as ServiceModel,
  Car as CarModel,
  Order as OrderModel,
  OrderToService as OrderToServiceModel
} from '../models/models.js';
import { User } from './user/user.repository.js';
import { Workshop } from './workshop/workshop.repository.js';
import { Service } from './service/service.repository.js';
import { Car } from './car/car.repository.js';
import { Order } from './order/order.repository.js';
import { OrderToService } from './order-to-service/order-to-service.repository.js';

const user = new User({
  userModel: UserModel
});

const workshop = new Workshop({
  workshopModel: WorkshopModel
});

const service = new Service({
  serviceModel: ServiceModel
});

const car = new Car({
  carModel: CarModel
});

const order = new Order({
  orderModer: OrderModel
});

const orderToService = new OrderToService({
  orderToServiceModel: OrderToServiceModel
});
export { user, workshop, service, car, order, orderToService };
