const path = require('path');
const server = require(path.join(__dirname, '../src/server'));

module.exports = async () => {
  global.__SERVER__ = server;
};
