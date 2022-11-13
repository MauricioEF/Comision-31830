import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    password:String
})

export default {
    collection,
    schema
}