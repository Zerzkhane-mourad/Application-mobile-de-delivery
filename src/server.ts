import express from 'express'
import mongoose from 'mongoose'
import { config } from './config/config'
import Logging from './library/Logging'


const app = express()



mongoose.connect(config.mongo.url , { retryWrites: true, w: 'majority' } )
    .then(()=>{
        Logging.info("connected to base donne")
    })
    .catch((err)=> {
        Logging.error(err)
    })