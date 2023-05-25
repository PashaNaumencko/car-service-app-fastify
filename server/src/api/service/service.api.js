import { ServicesApiPath, ControllerHook, HttpMethod } from '../../common/enums/enums.js';

const initService = (fastify, opts, done) => {
  const { service: serviceService } = opts.services;

  fastify.route({
    method: HttpMethod.GET,
    url: ServicesApiPath.ROOT,
    [ControllerHook.HANDLER]: async () => serviceService.getAll()
  });

  done();
};

export { initService };
