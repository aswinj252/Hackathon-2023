const GetDetails = async (email,repository) =>{

     await repository.Activate(email)
  
    const id = await repository.getDetails(email)
    console.log(id);

   const objectId = id._id;
const Id = objectId.toString();
console.log(Id);

     return {Id}

}
export default GetDetails