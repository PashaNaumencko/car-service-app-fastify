import { WHITE_ROUTES } from '../common/constants/api.constants.js';
import { ApiPath } from '../common/enums/enums.js';
import { authorization as authorizationPlugin } from '../plugins/plugins.js';
import { initAuth } from './auth/auth.api.js';

const initApi = (fastify, { services: { auth, user } }, done) => {
  fastify.setValidatorCompiler(({ schema }) => {
    return data => schema.validate(data);
  });

  fastify.register(authorizationPlugin, {
    services: {
      user,
      auth
    },
    routesWhiteList: WHITE_ROUTES
  });

  fastify.register(initAuth, {
    services: {
      auth,
      user
    },
    prefix: ApiPath.AUTH
  });

  done();
};

export { initApi };
