import express from 'express'
import mongoose from 'mongoose'
import { config } from './config/config'
import Logging from './library/Logging'
import { urlencoded, json } from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import errorHandling from './middlewares/errorHandling';
import ExpressValidator = require('express-validator');

dotenv.config()

const app = express()

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandling)


import routeuser from "./routes/User";

app.use('/api/user', routeuser)



mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info("connected to base donne")
    })
    .catch((err) => {
        Logging.error(err)
    })


app.listen(config.server.port, () => {
    Logging.info(`server is running on port ${config.server.port}`);
});

