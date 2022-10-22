export default class MemoryDao{
    constructor(){
        this.entities = {
            users:[],
            pets:[],
        }
    }
    getAll = async(entity)=>{
        if(!this.entities[entity]) throw new Error('Entity not found');
        return this.entities[entity];
    }
    save = async(element,entity) =>{
        if(!this.entities[entity]) throw new Error('Entity not found');
        if(this.entities[entity].length===0){
            element.id = 1;
        }else{
            element.id = this.entities[entity][this.entities[entity].length-1].id+1;
        }
        this.entities[entity].push(element);
    }
}