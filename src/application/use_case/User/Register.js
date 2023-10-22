import UserEntity from "../../../entities/UserEntity.js";

const register = async (
  email,
  password,
  DBRrepository,
  authServiceRepository
) => {
  const User = await DBRrepository.UserExist(email);
  if (User === null) {
    const hashPassword = await authServiceRepository.Bcrypt(password);
    const userDetails = UserEntity(email, hashPassword);
    const newUser = await DBRrepository.Create(userDetails);
    console.log(newUser, "jaii");

    return { message: "New User Created,", status: true };
  } else {
    return { message: "User Already Exist", status: false };
  }
};

export default register;
