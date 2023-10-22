import Tokenverify from "../application/use_case/Vender/Tokenverify.js";
import GetDetails from "../application/use_case/Vender/GetDetails.js";
import Getdetails from "../application/use_case/Vender/Details.js";
import changePassword from "../application/use_case/Vender/changePassword.js";
import login from "../application/use_case/Vender/Login.js";

const venderController = (venderRepositoryInt,venderRepositoryImp,authServiceInt,authServiceImp ) =>{
const VenderRepository = venderRepositoryInt(venderRepositoryImp());
const authRepository = authServiceInt(authServiceImp());


    const verify = async(req,res) =>{
        try {
             const token = req.params.token
        console.log(token);
        const verifyToken = await Tokenverify(token,authRepository)
        console.log(verifyToken.verify.email);
        if (verifyToken.verify.email) {

           const id = await  GetDetails (verifyToken.verify.email,VenderRepository)
           console.log(id.Id);
       
           

            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
                <style>
                    /* Reset styles to ensure consistency across email clients */
                    body, table, td, a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        margin: 0;
                        padding: 0;
                    }
            
                    /* Set the background color of the email */
                    body {
                        background-color: #f4f4f4;
                        font-family: Arial, sans-serif;
                    }
            
                    /* Ensure proper rendering in email clients */
                    table {
                        border-collapse: collapse;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                    }
            
                    /* Add some spacing and styling to the email container */
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
            
                    /* Style the header with your logo or text */
                    .header {
                        text-align: center;
                        padding: 20px 0;
                    }
            
                    /* Style the main content area */
                    .content {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 5px;
                    }
            
                    /* Style headings */
                    h1, h2 {
                        color: #333;
                    }
            
                    /* Style buttons */
                    .button {
                        display: inline-block;
                        background-color: #007bff;
                        color: #ffffff;
                        text-decoration: none;
                        padding: 10px 20px;
                        border-radius: 3px;
                    }
            
                    /* Make sure the button is readable on different backgrounds */
                    .button:hover {
                        background-color: #0056b3;
                    }
            
                    /* Responsive styles */
                    @media screen and (max-width: 600px) {
                        /* Center align the content when viewed on smaller screens */
                        .email-container {
                            width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        <!-- Add your logo or text here -->
                        <h1>Your Company</h1>
                    </div>
                    <div class="content">
                        <h2>Email Verified!</h2>
                        <p>Thank you for verifying your email address. You are now part of our community.</p>
                        <p>Click the button below to get started:</p>
                        <a href="http://localhost:5173/vender/signup/${id.Id}" class="button">Get Started</a>
                    </div>
                </div>
            </body>
            </html>
            `)

            
        }
        else if(verifyToken.verify.expired===true)


        
        { 
            res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
                /* Reset styles to ensure consistency across email clients */
                body, table, td, a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    margin: 0;
                    padding: 0;
                }
        
                /* Set the background color of the email */
                body {
                    background-color: #f4f4f4;
                    font-family: Arial, sans-serif;
                }
        
                /* Ensure proper rendering in email clients */
                table {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                /* Add some spacing and styling to the email container */
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
        
                /* Style the header with your logo or text */
                .header {
                    text-align: center;
                    padding: 20px 0;
                }
        
                /* Style the main content area */
                .content {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                }
        
                /* Style headings */
                h1, h2 {
                    color: #333;
                }
        
                /* Style buttons */
                .button {
                    display: inline-block;
                    background-color: #007bff;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 3px;
                }
        
                /* Make sure the button is readable on different backgrounds */
                .button:hover {
                    background-color: #0056b3;
                }
        
                /* Responsive styles */
                @media screen and (max-width: 600px) {
                    /* Center align the content when viewed on smaller screens */
                    .email-container {
                        width: 100%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <!-- Add your logo or text here -->
                    <h1>Your Company</h1>
                </div>
                <div class="content">
                    <h2>Link expired !</h2>
                </div>
            </div>
        </body>
        </html>
        `)
            
        }
        } catch (error) {
            console.log(error);
        }
        
       



    }
    const AddPassword= async ( req,res) =>{
            try {
                const {email,password} = req.body

                const response = await changePassword(email,password,VenderRepository,authRepository)
                console.log(response);
                res.json({response})

            } catch (error) {
                
            }
        }

        const getData = async (req,res) =>{
            try {
                const id = req.params.id

                const response =await Getdetails(id,VenderRepository)
                console.log(response);
                res.json({response})
                

            } catch (error) {
                console.log(error);
                
            }
        }

        const Login = async(req,res) =>{
            const {email,password} = req.body
           
            const response = await login (email,password,VenderRepository,authRepository)
      console.log(response);
      res.json({response})
      
        } 

return {verify,AddPassword,getData,Login}

}

export default venderController