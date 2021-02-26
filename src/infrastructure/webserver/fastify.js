const fastify = require("fastify");
const routes = require("../../ports/http/routes");

module.exports = () => {
  const server = fastify({
    logger: true,
  });

  routes.forEach((route, index) => {
    server.route(route);
  });

  return server;
};
