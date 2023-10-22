import User from "../Models/User.js"

 const UserRepositoryImp = () =>{

    const userExist = (email) => User.findOne({email:email})
    const Create = async  (details) =>{
        const create = new User ({
            email:details.getEmail(),
            password:details.getPassword()
        })
        return create.save();

    }

    return {userExist,Create}

 }
 export default UserRepositoryImp