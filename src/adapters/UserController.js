import register from "../application/use_case/User/Register.js";
import UserLogin from "../application/use_case/User/UserLogin.js";
import venderAdd from "../application/use_case/User/VenderAdd.js";

const UserController = (
  UserRepositoryInt,
  UserRepositoryImp,
  authServiceInt,
  authServiceImp,
  mailServiceInt,
  mailServiceImp,
  S3ServiceInt,
  S3ServiceImp,
  venderRepositoryInt,
  venderRepositoryImp
) => {
  const DBRrepository = UserRepositoryInt(UserRepositoryImp());
  const authserviceRepository = authServiceInt(authServiceImp());
  const mailSeviceRepository = mailServiceInt(mailServiceImp());
  const venderDb = venderRepositoryInt(venderRepositoryImp());

  const CreateUser = async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;

      const response = await register(
        email,
        password,
        DBRrepository,
        authserviceRepository
      );

      console.log(response);
      res.json({response})
    } catch (error) {
      console.log(error);
    }
  };
  const Login = async (req, res) => {
    try {
        const {email,password} = req.body
        const response = await UserLogin(email,password,DBRrepository,authserviceRepository)
     console.log( response,"password");
     res.json({response})
    } catch (error) {}
  };

  const AddVender = async (req,res) =>{
    try {
        const {email} = req.body
        const response = await venderAdd(email,venderDb,authserviceRepository,mailSeviceRepository)
        console.log(response);
        res.json({response})
    } catch (error) {
        console.log(error);
        
    }

  }

  return { CreateUser, Login,AddVender };
};
export default UserController;
