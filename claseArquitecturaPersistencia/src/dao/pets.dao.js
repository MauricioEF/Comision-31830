export default class PetsDaoArray {
    constructor() {
        this.pets = [];
    }
    getAll = async() =>{
        return this.pets;
    }
    save = async(pet) =>{
        if(this.pets.length===0) pet.id=1;
        else pet.id = this.pets[this.pets.length-1].id+1;
        this.pets.push(pet);
        return pet;
    }
}