import { User as UserModel, Workshop as WorkshopModel } from '../models/models.js';
import { User } from './user/user.repository.js';
import { Workshop } from './workshop/workshop.repository.js';

const user = new User({
  userModel: UserModel
});

const workshop = new Workshop({
  workshopModel: WorkshopModel
});

export { user, workshop };
