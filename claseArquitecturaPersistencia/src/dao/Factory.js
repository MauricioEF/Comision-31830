import mongoose from 'mongoose';
import config from '../config/config.js';
import MongoClient from './MongoClient.js';
const PERSISTENCE = config.app.PERSISTENCE;
export default class PersistenceFactory {
    static getPersistence =  async() =>{
        switch(PERSISTENCE){
            case "MEMORY":
                let {default:UserDaoMemory} = await import('./users.dao.js');
                let {default:PetDaoMemory} = await import('./pets.dao.js');
                return {
                    users: new UserDaoMemory(),
                    pets: new PetDaoMemory()
                }
            case "FILESYSTEM":
                let {default:UserDaoFile} = await import('./usersFile.dao.js');
                return {
                    users:new UserDaoFile()
                }
            case "MONGUITOCONQUESO":
                const connection = MongoClient.getInstance();
                let {default:UserDaoMongo} = await import('./usersMongo.dao.js');
                return {
                    users:new UserDaoMongo()
                }
        }
    }
}