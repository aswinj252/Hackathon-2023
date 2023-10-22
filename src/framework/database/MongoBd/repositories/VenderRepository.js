
import Vender from "../Models/Vender.js" 
const venderRepositoryImp = ( ) =>{
const VenderExist = (email) => Vender.findOne({email:email})
const AdVender = (details) =>{
    const create = new Vender ({
        email:details.getEmail(),
        password:details.getPassword(),
        activated:false
    })
    return create.save();


}

const getDetails = (email) => Vender.findOne({email:email})
const Activate = (email) => Vender.updateOne({email:email},{$set:{activated:true}})
const getData = (id) => Vender.findOne({_id:id})
const passwordchange = (email,password) => Vender.updateOne({email:email},{$set:{password:password}})
return {VenderExist,AdVender,getDetails,Activate,getData,passwordchange}
    
}
export default venderRepositoryImp