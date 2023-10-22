const login = async (email,password,repository,authRepository ) =>{

    const venderExist = await repository.VenderExist(email)
    if(venderExist != null ){
        const ispassword = await authRepository.ComparePassword(password,venderExist.password)
        if (ispassword) {
            return {message:"Login Success",status:true, Login:true}
        }
        else{
            return {message:"incorrect password",status:true, Login:false}
        }
    }
    else{
        return{message:"The email is not registered",status:false, Login:false}
    }

}
export default login