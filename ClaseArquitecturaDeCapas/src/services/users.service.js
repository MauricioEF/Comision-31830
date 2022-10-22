export default class UserService {
    constructor(dao){
        this.dao = dao;
        this.entity = 'users';
    }
    getUsers = () =>{
        return this.dao.getAll(this.entity);
    }
    saveUser = (user) =>{
        user.role = user.role?user.role:'user';
        user.active = true;
        return this.dao.save(user,this.entity);
    }
}