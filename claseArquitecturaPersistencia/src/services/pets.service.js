import PersistenceFactory from "../dao/Factory.js";
class PetService {
    constructor(){
        this.petsDao;
        this.init();
    }

    init = async() =>{
        const {pets} = await PersistenceFactory.getPersistence();
        this.petsDao = pets;
    }

    getpets =async() =>{
        return await this.petsDao.getAll();
    }
    addpet = async(pet) =>{
        return await this.petsDao.save(pet);
    }
}
const petservice = new petservice();

export default petservice;