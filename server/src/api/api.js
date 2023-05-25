import { WHITE_ROUTES } from '../common/constants/api.constants.js';
import { ApiPath } from '../common/enums/enums.js';
import { authorization as authorizationPlugin } from '../plugins/plugins.js';
import { initAuth } from './auth/auth.api.js';
import { initWorkshop } from './workshop/workshop.api.js';
import { initOrders } from './order/order.api.js';

const initApi = (fastify, { services: { auth, user, workshop, order } }, done) => {
  fastify.setValidatorCompiler(({ schema }) => {
    return data => schema.validate(data);
  });

  console.log('ApiPath.WORKSHOPS', ApiPath);

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

  fastify.register(initWorkshop, {
    services: {
      workshop
    },
    prefix: ApiPath.WORKSHOPS
  });

  fastify.register(initOrders, {
    services: {
      order
    },
    prefix: ApiPath.ORDERS
  });

  done();
};

export { initApi };
