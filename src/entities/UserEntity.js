const UserEntity = (email,password) => {
    return {
        getEmail:()=>email,
        getPassword:()=>password
    }
}
export default UserEntity