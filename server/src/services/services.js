import { user as userRepository } from '../data/repositories/repositories.js';
import { Auth } from './auth/auth.service.js';
import { User } from './user/user.service.js';

const auth = new Auth({
  userRepository
});

const user = new User({
  userRepository
});

export { auth, user };
