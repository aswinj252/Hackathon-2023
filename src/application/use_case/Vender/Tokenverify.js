const Tokenverify =async(token,authRepository) =>{
    const verify = await authRepository.verify(token)
    console.log(verify);
   

return {verify}

}
export default Tokenverify