import Artwork from "../models/Artwork.js";
import GenericRepository from "./GenericRepository.js";

export default class ArtworkService extends GenericRepository {
    constructor(dao){
        super(dao,Artwork.collection);
    }
}