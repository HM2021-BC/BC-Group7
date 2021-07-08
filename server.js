/**
 * @title Tamacoinchi smart contract, raising a virtual pet
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own virtual cute pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 * -> This part is the next.js web app on top of said smart contract
 */

const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: process.env.NODE_ENV !== "production",
  conf: {
    webpack: (config) => {
      config.devtool = false;

      for (const r of config.module.rules) {
        if (r.loader === "babel-loader") {
          r.options.sourceMaps = false;
        }
      }

      return config;
    },
  },
});

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log("Ready on localhost:3000");
  });
});
