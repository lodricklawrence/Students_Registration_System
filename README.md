# Students Registration System

## Table of Contents
- [Description](#description)
- [Technology Used](#technology-used)
- [Installation Guide](#installation-guide)
- [How to Use the Project](#how-to-use-the-project)
- [Acknowledgements](#acknowledgements)


# Description

### Project origin
Students Registration System is a backend project which i performed as one of the project given by my senior supervisors 

### What it can do
Students Registration System is a backend project which consist of GRAPHQL api's that enable a user to create,login, delete, update student details also retrieving students details by id and also all students details from Mongo DB database.

### Technology used
Node.JS, GRAPHQL,Apollo Server,Mongoose ORM, Mongo DB


# Installation guide
1. Install Node.js v16.14.2 in your local computer [Node Js](https://nodejs.org/en/).
2. Install Git as a version controller.
3. Copy the project repository directory URL from here.
4. Go to the directory in your computer where you want the cloned project to be placed.
5. Open the command line and run git clone [paste the URL] then run.
6. The project folders named frontend and backend are ready set in your local computer at that specific directory.

### Backend setup
1. Open the Command Line Interface(CLI) in your present directory then run the command cd backend. This will direct you to the backend folder.
2. Inside the backend folder rename .env.example file to be .env.
3. After that open the terminal and run the command npm install. This will install all the dependencies present in package.json file into your backend folder.


# How to use the project

### Backend use
1. Create a database within your Mongo DB Database Management System 
2. Back to your root directory where you can access backend cloned folder.
3. Open the Command Line Interface(CLI) in your present directory then run the command cd backend. This will direct you to the backend folder.
4. Inside the backend folder edit the credentials inside the .env file as instructed inside it. 
5. Within the model.js file is where you I placed my models(database Collection) named 'students_info' which uses a schema i wrote in studentsSchema , for more understanding visit [Mongoose docs](https://mongoosejs.com/).
6. After all this setups run npm start to your terminal to initiate the express server.The server will listen on http://localhost:5000/graphql("Then hold ctrl key and click the link, this will open Apollo graphql GUI where you can test all mutations from graphql endpoint") and the console.log says mongoose connected("This means the connection to Mongo db server is well through the connection string found in index.js file").


# Acknowlegements

Also i used [stackoverflow](https://stackoverflow.com/) to solve many of challenges i faced when performing this project.

Also i obtained Mongoose ORM knowledge from [Mongoose docs](https://mongoosejs.com/).

