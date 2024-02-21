let express=require('express')
const contactRoute = require('./Routes/web/contactMailRoute')
let routes=express.Router()

routes.use("/contact",contactRoute)

module.exports=routes