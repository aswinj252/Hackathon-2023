
import dotenv from 'dotenv';
dotenv.config();


export default {
    port: process.env.PORT,
    mongo: {
      uri: process.env.MONGO_URL 
    },
    EmailPassword:process.env.EmailPassword,
    Email:process.env.Email,
    accessKey:process.env.Accesskey,


}