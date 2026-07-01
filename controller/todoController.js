import Todo from '../models/Todo.js';

export const getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find().sort({createdAt:-1});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTodo=async(req,res)=>{
    try{
        const {title,priority}=req.body;
        const newTodo=await Todo.create({title,priority});
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTodo=async(req,res)=>{
    try{
        const updated=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if (!updated) return res.status(404).json({ message: "Todo not found" });
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteTodo=async(req,res)=>{
    try{
        const deleted=await Todo.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"Todo not found"});
        res.status(200).json({message:"Todo deleted successfully"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
