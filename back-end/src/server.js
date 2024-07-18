const { PORT = 5001 } = process.env;
const app = require("./app");
const knex = require("./db/connection");

async function startServer() {
  try {
    await knex.migrate.latest();
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}!`);
    });
  } catch (error) {
    if (error.message.includes('Migration table is already locked')) {
      await knex.migrate.unlock();
      await knex.migrate.latest();
      app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}!`);
      });
    } else {
      console.error(error);
      knex.destroy();
    }
  }
}

startServer();
