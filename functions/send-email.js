const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: email,
      to: process.env.TO_EMAIL,
      subject: `New message from \${name}`,
      text: message,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while sending the email",
      }),
    };
  }
};
