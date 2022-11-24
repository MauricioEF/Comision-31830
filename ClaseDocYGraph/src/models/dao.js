import mongoose from 'mongoose';
import User from './User.js';

export default class Dao {
    constructor(){
        this.connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/?retryWrites=true&w=majority');
        const timestamps = {timestamps:{'createdAt':'created_at','updatedAt':'updated_at'}};
        
        const userSchema = mongoose.Schema(User.schema,timestamps);
        this.models = {
            [User.model]: mongoose.model(User.model,userSchema)
        }
    }
    getAll = (params,entity) => {
        if(!this.models[entity]) throw new Error('Model is not defined in dao')
        return this.models[entity].find(params).lean();
    }
    getById = (params,entity) =>{
        if(!this.models[entity]) throw new Error('Model is not defined in dao')
        return this.models[entity].findOne(params).lean();
    }
    save = (doc,entity) =>{
        if(!this.models[entity]) throw new Error('Model is not defined in dao')
        return this.models[entity].create(doc);
    }
    update = async(doc,entity) => {
        if(!this.models[entity]) throw new Error('Model is not defined in dao')
        let id = doc._id;
        delete doc._id;
        let result = await this.models[entity].findByIdAndUpdate(id,{$set:doc});
        return result.toObject();
    }
}