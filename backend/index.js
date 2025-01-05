import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'
import AuthRoute from './routes/authRoute.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json()) // to parse JSON requests
app.use(cookieParser()) // to parse incoming cookies

app.use("/api/auth", AuthRoute)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on PORT ${PORT}.`)
})