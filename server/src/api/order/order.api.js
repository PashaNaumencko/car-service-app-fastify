import { OrdersApiPath, ControllerHook, HttpMethod, HttpCode } from '../../common/enums/enums.js';
import { getErrorStatusCode } from '../../helpers/helpers.js';

const initOrders = (fastify, opts, done) => {
  const { order: orderService } = opts.services;

  fastify.route({
    method: HttpMethod.GET,
    url: OrdersApiPath.ROOT,
    [ControllerHook.HANDLER]: () => orderService.getAll()
  });

  fastify.route({
    method: HttpMethod.POST,
    url: OrdersApiPath.ROOT,
    async [ControllerHook.HANDLER](req, res) {
      try {
        const createdOrder = await orderService.create({ userId: req.user.id, ...req.body });

        return res.status(HttpCode.CREATED).send(createdOrder);
      } catch (err) {
        return res.status(getErrorStatusCode(err)).send(err);
      }
    }
  });

  done();
};

export { initOrders };
