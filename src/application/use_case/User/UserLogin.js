const UserLogin = async (email, password, dbRepository, authRepository) => {
  const UserExist = await dbRepository.UserExist(email);

  if (UserExist != null) {
    const Password = await authRepository.ComparePassword(
      password,
      UserExist.password
    );
    if (Password) {
      return { Password, message:"login Successfull",login: true, status: true };
    }
    else{
        return{message:"wrong password",login:false, status: true}
    }
  } else {
    return { message: "No user found",login:false, status: false };
  }
};

export default UserLogin;
