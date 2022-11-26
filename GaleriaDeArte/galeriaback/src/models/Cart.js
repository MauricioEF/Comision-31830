import mongoose, { Schema } from 'mongoose';


export default class Cart {
        
    static get collection () {
        return 'Carts';
    }

    static get schema() {
        return {
            artworks : [
                {
                    artwork:{
                        type:Schema.Types.ObjectId,
                        ref:'Artworks'
                    },
                    quantity:{
                        type:Number,
                        default:1
                    }
                }
            ]
        }
    }
}