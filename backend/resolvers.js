const Students=require('./model/model');
const bcrypt=require('bcrypt');
const resolvers={
    Query:{
        getAllStudents:async ()=>{
            const allStudents = Students.find();
            return allStudents;
        },
        
        getSingleStudent:async (_parent, {id},_context,_info)=>{
            return await Students.findById(id)}
    },

    Mutation:{
            createStudent:async (parent,args,context,info)=>{
                const { username, email, password, region } = args.input;
                const salt=await bcrypt.genSalt(10);
                const hashPassword=await bcrypt.hash(password,salt)
                const student=new Students({username,email,password:hashPassword,region});
                await student.save();
                return student;
            },

            updateStudent:async (parent,args,context,info)=>{
                const {id}=args;
                const {username,email,region}=args.input;
                const updateStudent=await Students.findByIdAndUpdate(id,{username,email,region},{new:true});
                return updateStudent;
            },

            deleteStudent:async (parent,args,context,info)=>{
                const {id}=args
                return await Students.findByIdAndDelete(id);
            },

            studentLogin:async (parent,args,context,info)=>{
                const {studentEmail,studentPassword}=args.input
                const [{password}]=await Students.find({email:studentEmail})
                const isCorrect=await bcrypt.compare(studentPassword,password)
                const response=isCorrect?"Login successfully":"Wrong username or password"
                return response
            }
    }
}

module.exports=resolvers