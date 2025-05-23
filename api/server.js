const jsonServer = require("json-server");
const serverless = require("serverless-http");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
);
server.use(router);

// server.listen(3000, () => {
//     console.log("Json Server is running");
// });

module.exports.handler = serverless(server);
