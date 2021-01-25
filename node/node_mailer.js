const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "1ad1c254588259",
    pass: "dd00f589908324"
    }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    })
}

let data = {
    from: 'leeminwok0405@gmail.com',
    to: 'leeminwok0405@gmail.com',
    subject: 'test',
    text: 'nodejs mailer'
}

send(data);