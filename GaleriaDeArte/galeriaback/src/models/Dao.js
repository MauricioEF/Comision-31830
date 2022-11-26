import mongoose from 'mongoose';

import User from './User.js';
import Cart from './Cart.js';
import Artwork from './Artwork.js';

export default class Dao {
    constructor(config){
        this.mongoose = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.w5adegs.mongodb.net/${config.mongo.DATABASE}?retryWrites=true&w=majority`)
        const timestamps = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}}

        const userSchema = mongoose.Schema(User.schema,timestamps);
        const cartSchema = mongoose.Schema(Cart.schema,timestamps);
        const artworkSchema = mongoose.Schema(Artwork.schema,timestamps);

        this.models = {
            [User.collection]: mongoose.model(User.collection,userSchema),
            [Cart.collection]: mongoose.model(Cart.collection,cartSchema),
            [Artwork.collection] : mongoose.model(Artwork.collection,artworkSchema)
        }
    }

    getAll = async(options,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].find(options).lean();
        return result;
    }
    findOne = async(options,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].findOne(options).lean();
        return result;
    }

    save = async(document,entity) =>{
        if(!this.models[entity]) throw new Error(`La entidad no existe`);
        let result = await this.models[entity].create(document);
        return result;
    }

}