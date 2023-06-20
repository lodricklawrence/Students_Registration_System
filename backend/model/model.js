const mongoose=require('mongoose');
const studentsSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    region:String

})

const Students=mongoose.model('students_info',studentsSchema);

module.exports=Students;
