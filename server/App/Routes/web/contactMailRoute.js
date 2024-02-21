let express=require('express')
const { contactMail } = require('../../Controller/web/contactMailController')
let contactRoute=express.Router()

contactRoute.post("/contact-mail",contactMail)

module.exports=contactRoute