import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/Db.js'

dotenv.config()

const app=express()

connectDB()



app.listen(process.env.PORT,console.log(`Server started in ${process.env.PORT}`))