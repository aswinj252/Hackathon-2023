import nodemailer from "nodemailer";
import config from "../../config/config.js";
const mailServiceImp = () =>{


const sentMail = (email, token) => 


{

    const verifyToken = encodeURIComponent(token);
    const verificationLink = `http://localhost:3000/api/v1/vender/verify/${verifyToken}`;

    
 const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: config.Email,
          pass: config.EmailPassword,
        },
      });


      const mailOptions = {
        from: config.Email,
        to: email,
        subject: "Account Activation",
        text: ".",
        html: `<h1>${email}</h1>
          <p>Your Account has been registered to the platform . To complete your registration, please click the button below to activate your account </p>
          <p><a href=${verificationLink}   target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a></p>
          <p>once activated , you will be redirected to a page where you should enter the password </p>
          <p>The link <b>expires in 2 days</>.</p>`,
      };


    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error occurred:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  

      
      
}

return {sentMail}
}
export default mailServiceImp