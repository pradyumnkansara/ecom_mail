const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.forwardemail.net",
//     port: 465,
//     secure: true,
//     auth: {
//         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//         user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
//         pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
//     },
// });
exports.contactMail =  (req, res) => {

    // send mail with defined transport object
    // const info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    // });

    // console.log("Message sent: %s", info.messageId);
    
    
    
    console.log(req.body)

    res.send({
        status: 1,
        message: 'data save',
        
    })
    
}