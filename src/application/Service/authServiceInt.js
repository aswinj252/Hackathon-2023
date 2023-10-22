const authServiceInt = (repository) =>{
    const Bcrypt = (password) => repository.Bcrypt(password)
    const ComparePassword = (password,hashPassword) =>repository.ComparePassword(password,hashPassword)
    const createToken = (email) => repository.createToken(email)
   const verify  = (token) => repository.verify(token)
  


    return {Bcrypt,ComparePassword,createToken,verify}

}
export default authServiceInt