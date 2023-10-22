import UserController from "../../../adapters/UserController.js"
import S3ServiceInt from "../../../application/Service/S3ServiceInt.js"
import authServiceInt from "../../../application/Service/authServiceInt.js"
import mailServiceInt from "../../../application/Service/mailServiceInt.js"
import UserRepositoryInt from "../../../application/repository/UserRepositoryInt.js"
import S3ServiceImp from "../../Services/S3ServiceImp.js"
import authServiceImp from "../../Services/authServiceImp.js"
import mailServiceImp from "../../Services/mailServiceImp.js"
import UserRepositoryImp from "../../database/MongoBd/repositories/UserRepositoryImp.js"
import venderRepositoryInt from "../../../application/repository/VenderRepositoryInt.js"
import venderRepositoryImp from "../../database/MongoBd/repositories/VenderRepository.js"
const UserRouter = (express) =>{

    const router = express.Router()
    const controller = UserController(UserRepositoryInt,UserRepositoryImp,authServiceInt,authServiceImp,mailServiceInt,mailServiceImp,S3ServiceInt,S3ServiceImp,venderRepositoryInt,venderRepositoryImp)

    router.route("/signup").post(controller.CreateUser)
    router.route("/login").post(controller.Login)
    router.route("/add_vender").post(controller.AddVender)

    return router

}
export default UserRouter