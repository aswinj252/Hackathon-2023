import venderEntity from "../../../entities/VenderEntity.js";

const venderAdd= async (email,DBRrepository,authRepository,mailRepository)=>{
    const VenderExist = await DBRrepository.VenderExist(email)
    console.log(VenderExist,"GFgfg");
    if (VenderExist === null) {
        const password = "dummy"

        const venderDetails = venderEntity(email,password)
        const AddVender = await DBRrepository.AdVender(venderDetails)
       const token = await authRepository.createToken(AddVender.email)
        await mailRepository.sentMail(AddVender.email,token);
console.log("done");
        return {AddVender,message:"Vender added"}

        
    }

    else{
console.log("mot done");
        return{message:"Vender Already exist",registered:false}

    }




}
export default venderAdd