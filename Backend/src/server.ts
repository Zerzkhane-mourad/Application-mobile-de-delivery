import cookieParser from 'cookie-parser';
import { urlencoded, json } from "body-parser";
import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config'
import Logging from './library/Logging'
import dotenv from 'dotenv';
import errorHandling from './middlewares/errorHandling';
import ExpressValidator = require('express-validator');
import routeuser from "./routes/User";
dotenv.config()

class App {

    public app: express.Application

    public listen() {

        this.app.listen(config.server.port, () => {
            Logging.info(`server is running on port ${config.server.port}`);
        });

    }
    
    constructor() {
        this.app = express();

        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeErrorHandling();
        this.initializeRoute();
        this.listen()
    }

    private initializeMiddlewares() {
        this.app.use(json());
        this.app.use(cookieParser());
        this.app.use(urlencoded({ extended: true }));
    }


    private initializeErrorHandling() {
        this.app.use(errorHandling);
    }

    private initializeRoute() {
        this.app.use('/api/user', routeuser)
    }

    private connectToTheDatabase() {

        mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
            .then(() => {
                Logging.info("connected to base donne")
            })
            .catch((err) => {
                Logging.error(err)
            })

    }

}

new App