import mongoose from 'mongoose';

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title'],
        trim:true,
        maxlength:[100,'Title cannot be more than 100 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'low'
    },
},
    {
        timestamps:true,
    }
);
const Todo=mongoose.model('Todo',todoSchema);
export default Todo;
