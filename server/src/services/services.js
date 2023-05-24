import {
  user as userRepository,
  workshop as workshopRepository
} from '../data/repositories/repositories.js';
import { Auth } from './auth/auth.service.js';
import { User } from './user/user.service.js';
import { Workshop } from './workshop/workshop.service.js';

const auth = new Auth({
  userRepository
});

const user = new User({
  userRepository
});

const workshop = new Workshop({
  workshopRepository
});

export { auth, user, workshop };
