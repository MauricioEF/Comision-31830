export default class Artwork {
    static get collection() {
        return "Artworks"
    }

    static get schema() {
        return {
            title:String,
            description:String,
            author:String,
            price:Number,
            copies:Number,
            image:String
        }
    }
}