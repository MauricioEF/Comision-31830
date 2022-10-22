import { petService } from "../services/index.js";

const getAllPets = async(req,res)=>{
    try{
        let pets = await petService.getPets();
        res.send({status:"success",payload:pets})
    }catch(error){
        console.log(error);
        res.send({status:"error",error:error})
    }
}
const savePet = async(req,res)=>{
    try{
        const {name,specie} = req.body;
        if(!name||!specie) return res.status(400).send({status:"error",error:"Incomplete values"});
        let pet = {
            name,
            specie
        }
        let result = await petService.savePet(pet);
        res.send({status:"success",message:"Pet added",payload:result});    
    }catch(error){
        console.log(error);
        res.send({status:"error",error:error})
    }
}

export default {
    getAllPets,
    savePet
}