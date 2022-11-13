import { usersService } from "./services/index.js";
const resolvers = {
    Query:{
        helloWorld: () => 'Hola mundo :)',
        goodByeWorld: () => 'Adiós mundo cruel :( ',
        getAllUsers: async() =>{
            let users = await usersService.get();
            return users;
        }
    },

    Mutation:{
        createUser: async(_,params) =>{
            const user = params;
            const result = await usersService.save(user);
            return result
        },
        updateUser: async(_,params) =>{
            const { id, updateFields} = params;
            let result = await usersService.update(id,updateFields);
            return result
        }
    }
}

export default resolvers;