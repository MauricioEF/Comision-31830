export default class GenericRepository {
    constructor(dao,model){
        this.dao = dao;
        this.model = model;
    }
    get = (params) =>{
        return this.dao.getAll(params,this.model)
    }
    getBy = (params) =>{
        return this.dao.getById(params,this.model);
    }
    save = (doc) =>{
        return this.dao.save(doc,this.model);
    }
    update = (id,doc) =>{
        doc._id = id;
        return this.dao.update(doc,this.model);
    }
}