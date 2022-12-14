import { cartsService, userService } from "../services/service.js";
import {createHash} from '../utils.js';

const register = async(req,res) =>{
    let {first_name,last_name,email,phone,password} = req.body;
    try{
        if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar la imagen"})
        let user = await userService.getBy({email});
        if(user) return res.status(400).send({status:"error",error:"El usuario ya existe"})
        let cart = await cartsService.save({artworks:[]});
        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            email,
            password:hashedPassword,
            phone,
            cart:cart._id,
            avatar:`${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
        }
        let result = await userService.save(newUser);
        res.send({status:"success",message:"User added"});

    }catch(error){
        res.status(500).send({status:"error",error:"Error del servidor"})
    }
} 

export default {
    register
}