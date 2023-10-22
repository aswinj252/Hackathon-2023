const mailServiceInt = (repositories) =>{
    const sentMail = (email,token) =>repositories. sentMail(email,token)


    return {sentMail}
}
export default mailServiceInt