const Getdetails = async (id,repository) =>{

const data = await repository.getData(id)
console.log(data);
if (data !=null &&data.activated===true) {
    
    return(data.email)
}


}
export default Getdetails