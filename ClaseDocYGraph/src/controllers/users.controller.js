import { usersService } from "../services/index.js";

const getUsers = async(req,res) =>{
    const users = await usersService.get();
    res.send({users})
}

const getUserById = async(req,res) =>{
    const {uid} = req.params;
    const user = await usersService.getBy({_id:uid});
    res.send({user})
}

const saveUser = async(req,res) =>{
    const user = req.body;
    const result = await usersService.save(user);
    res.send({result})
}

export default {
    getUserById,
    getUsers,
    saveUser
}