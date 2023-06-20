const {gql}=require('apollo-server-express');

const typeDefs=gql `
    type Student{
        id:ID!
        username:String!
        email:String!
        region:String!
    }

    type Query{
        getAllStudents:[Student!]!
        getSingleStudent(id: ID!):Student!
    }

    input StudentInput {
        username: String!
        email: String!
        password: String!
        region: String!
      }

     
    input StudentUpdateInput{
        username: String!
        email: String! 
        region: String!
    }  

    input studentCredentials{
        studentEmail:String!
        studentPassword:String!
    }


    type Mutation{
        createStudent(input: StudentInput!):Student!
        updateStudent(id:ID! input:StudentUpdateInput!):Student!
        deleteStudent(id:ID!):Student!
        studentLogin(input:studentCredentials!):String!
    }
`

module.exports=typeDefs;