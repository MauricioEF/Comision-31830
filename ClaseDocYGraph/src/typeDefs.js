import { gql } from "apollo-server-express";

const typeDefs  = gql`
    input UserInput {
        name:String
        email:String
        password:String
    }

    type User {
        _id:ID
        name: String
        email: String
        password: String
    }


    type Query {
        helloWorld:String
        goodByeWorld:String
        getAllUsers: [User]
    }


    type Mutation {
        createUser(name:String,email:String,password:String) : User
        updateUser(id:String,updateFields:UserInput) : User
    }


`

export default typeDefs;