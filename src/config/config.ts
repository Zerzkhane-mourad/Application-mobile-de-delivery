import dotenv from 'dotenv';

dotenv.config()

const MONGO_USERNAME = process.env.MONGO_USERNAME 
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@livraison-marhaba.njt0yab.mongodb.net/?retryWrites=true&w=majority`

const SERVER_PORT = process.env.SERVER_PORT
const TOKEN_SECRET=  process.env.TOKEN_SECRET

export const config = {

    mongo : {
        url: MONGO_URL
    },

    server: {
        port : SERVER_PORT
    },

    token :{
        token_secret: TOKEN_SECRET
    }

}