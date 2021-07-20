const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

const sendWelcomeEmail = (email, name) => { 
    sgMail.send({ 
        to: email, 
        from: 'ashmik.harinkhede@gmail.com', 
        subject: 'Thanks for signing up!', 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}  

const cancellationEmail = (email, name) => { 
    sgMail.send({ 
        to: email, 
        from: 'ashmik.harinkhede@gmail.com', 
        subject: 'Regarding Cancellation of Task Manager Service', 
        text: `Goodbye, ${name} we are sorry to see you go. Please let us know how we could improve to keep customers like you onboard.`
    })
}

module.exports = { 
    sendWelcomeEmail, 
    cancellationEmail
}