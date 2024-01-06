const nodemailer = require('nodemailer')

const EmailSend = async (emailTo, emailText, emailSub)=>{
  let transport = nodemailer.createTransport({
    host:'',
    port:'',
    secure:false,
    auth:{user:'email'}
  })

  let mailOption = {
    from:"Title to be shown ",
    to:emailTo,
    subject:emailSub,
    text:emailText
  }

  return await transport.sendMail(mailOption)
}

module.exports = EmailSend;