export default class PetsService {
    constructor(dao){
        this.dao = dao;
        this.entity = 'pets';
    }
    getPets = () =>{
        return this.dao.getAll(this.entity);
    }
    savePet = (pet) =>{
        pet.adopted=false;
        pet.active = true;
        return this.dao.save(pet,this.entity);
    }
}