import fp from 'fastify-plugin';
import {
  ExceptionMessage,
  ControllerHook,
  HttpCode,
  UserRole,
  ApiPath,
  OrdersApiPath,
  HttpMethod
} from '../../common/enums/enums.js';
import { InvalidCredentialsError } from '../../exceptions/exceptions.js';

const authorization = fp(async (fastify, { routesWhiteList, services }) => {
  fastify.decorateRequest('user', null);

  fastify.addHook(ControllerHook.ON_REQUEST, async (request, reply) => {
    try {
      const isWhiteRoute = routesWhiteList.some(route => route === request.routerPath);

      if (isWhiteRoute) {
        return;
      }

      const [, token] = request.headers?.authorization?.split(' ') ?? [];
      const { user, auth } = services;
      const { id } = await auth.verifyToken(token);

      const authorizedUser = await user.getUserById(id);
      if (!authorizedUser) {
        throw new InvalidCredentialsError(ExceptionMessage.INVALID_TOKEN);
      }

      console.log('routerPath', request.routerPath);
      console.log(`/api${ApiPath.ORDERS}${OrdersApiPath.$ID}${OrdersApiPath.CHANGE_STATUS}`);
      console.log('request.method', request.method);
      console.log('authorizedUser.role', authorizedUser.role);

      if (
        request.routerPath ===
          `/api${ApiPath.ORDERS}${OrdersApiPath.$ID}${OrdersApiPath.CHANGE_STATUS}` &&
        request.method === HttpMethod.PATCH &&
        authorizedUser.role !== UserRole.ADMIN
      ) {
        throw new InvalidCredentialsError(ExceptionMessage.PERMISSION_DENIED);
      }

      request.user = authorizedUser;
    } catch (err) {
      reply.code(HttpCode.UNAUTHORIZED).send(err);
    }
  });
});

export { authorization };
