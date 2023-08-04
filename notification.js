const nodemailer = require('nodemailer');

module.exports = {
  sendNotification: function(type, message) {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    // Send mail with defined transport object
    let info = transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'receiver-email@gmail.com',
      subject: type,
      text: message
    });

    console.log(`Notification sent: ${info.messageId}`);
  }
};