export default  class UserDTO{
    constructor(user){
        this.id = user._id??user.id;
        this.first_name = user.first_name||'usuario';
        this.last_name = user.last_name;
        this.name = `${user.first_name} ${user.last_name}`;
        this.email = user.email;
        this.role = user.role||"user";
    }
}