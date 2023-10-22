const changePassword = async( email,password,repository,authRepository)=>{
    const hashPassword = await authRepository.Bcrypt(password)

 const passwordchange = await repository.passwordchange(email,hashPassword)
 console.log(passwordchange);
return {message:"Password Added",Added:true}
}
export default changePassword