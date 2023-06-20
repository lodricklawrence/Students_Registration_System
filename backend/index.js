require('dotenv').config();
const {DB_HOST,DB_PORT,DB_NAME}=process.env;
const express=require('express');
const {ApolloServer}=require('apollo-server-express');
const typeDefs=require('./typeDefs');
const resolvers=require('./resolvers');
const mongoose=require('mongoose');
const app=express();
const PORT = 5000;


async function startApolloServer() {
    const app = express();
  
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
  
    server.applyMiddleware({ app });
  
    app.use((req,res)=>{
        res.send("hello from express server");
    })

   await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
        useNewUrlParser:true,
    });

    console.log('Mongoose connected');

    app.listen(PORT,()=>{
        console.log(`server is listening on http://localhost:${PORT}${server.graphqlPath}`);
    });
  }
  
  startApolloServer().catch((err) => {
    console.error(err);
  });
 
  
  
  
  
  
  




