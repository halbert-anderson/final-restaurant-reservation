const { server } = require('../src/app');

module.exports = async () => {
  if (server && server.close) {
    await new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
};
