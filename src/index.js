import express from "express";
import mongoose from "mongoose";
import http from "http";
import expressConfig from "./framework/express.js";
import serverConfig from "./framework/server.js";
import routes from "./framework/routes/routes.js";
import config from "./config/config.js";
import connection from "./framework/database/MongoBd/connection.js";


const app = express();
expressConfig(app);
connection(mongoose, config).connectToMongo();

routes(app,express);
const server = http.createServer(app);

serverConfig(server, config).startServer();

export default app