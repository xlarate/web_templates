import express from  'express';
import dotenv from 'dotenv'
// import cors from 'cors';
import {notFound} from './middlewares/not-found.js';
// import connectDB from './db/connectDB.js';
import {errorHandler} from './middlewares/errorHandler.js';
dotenv.config()

const PORT = process.env.PORT || 8000
// const CONNECTION_URL_CLOUD = process.env.CONNECTION_URL_CLOUD
const app = express()

// app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {console.log(`RUNNING ON PORT : ${process.env.PORT}`)})

// FOR DATABASE LINKING

// app.listen(PORT, async () => {
//   try{
//     await connectDB(CONNECTION_URL_CLOUD)
//     console.log(`CONNECTED TO DB  \nRUNNING ON PORT : ${PORT}`)
//   }catch(err){
//     console.log(err)
//   }
// })