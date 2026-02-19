// create instance of server 
// config server

const express = require("express")
const authRouter = require("./routes/auth.routes")
const app = express()
const cookieParser = require("cookie-parser")
// express server cant directly read req.body => use this middleware to make it possible
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
module.exports = app       