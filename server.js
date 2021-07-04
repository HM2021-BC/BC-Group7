/**
 * @title Dice gambling smart contract, demonstration of how a possible decentralized gambling/betting game experience could look like
 * @author Enis Tola
 * @dev DiceGame is a smart contract that allows users to participate in dice gambling without having to fear centralized 
 * authorities. Every transaction is written on the Ethereum blockchain, cutting out any kind of middle man
 * -> This part is the next.js web app on top of said smart contract
 */

const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  conf: {
    webpack: config => {
      config.devtool = false;

      for (const r of config.module.rules) {
        if (r.loader === 'babel-loader') {
          r.options.sourceMaps = false;
        }
      }

      return config;
    }
  }
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, err => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
