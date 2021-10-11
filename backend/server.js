import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config({path: './config.env'})

connectDB()

const app = express()


app.use(express.json())

app.get('/', (req,res)=>{
    res.send('hello')
})

// app.use(globalErrorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
