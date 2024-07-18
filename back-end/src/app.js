const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const app = express();

const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? /\.onrender\.com$/ : '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/tables", tablesRouter);
app.use("/reservations", reservationsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
