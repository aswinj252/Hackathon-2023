const UserRepositoryInt = (repository) =>{
const UserExist = (email) => repository.userExist(email)
const Create = (details) => repository.Create(details)

return{UserExist,Create}
}
export default UserRepositoryInt