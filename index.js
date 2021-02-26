require("dotenv").config();
const server = require("./src/infrastructure/webserver/fastify")();
const mongoDb = require("./src/infrastructure/database/mongodb");

mongoDb();
server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
