import FileContainer from '../contenedores/FileContainer.js'
import {generateUser} from '../utils.js';

class Users extends FileContainer {
    constructor() { super() };
    populate(quantity=50){ //Generar tantos usuarios como me indique el cliente, default: 50
        const newUsers = [];
        for(let i = 0; i < quantity; i++){
            let newUser = generateUser();
            this.save(newUser);
            newUsers.push(newUser)
        }
        return newUsers;
    }
}
export default Users;