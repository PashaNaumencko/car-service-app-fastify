import { User as UserModel } from '../models/models.js';
import { User } from './user/user.repository.js';

const user = new User({
  userModel: UserModel
});

export { user };
