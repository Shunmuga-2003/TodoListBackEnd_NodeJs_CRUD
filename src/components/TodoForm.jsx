import {useState} from 'react';
export default function TodoForm({onAddTodo}) {
    const[title,setTitle]=useState('');
    const[priority,setPriority]=useState('medium');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim()==='') return;
        onAddTodo({title,priority});
        setTitle('');
        setPriority('medium');
    };
    return(
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                 type="text"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 placeHolder="Enter a new todo"
                 className="flex-1  rounded-lg border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            <select
                 value={priority}
                 onChange={(e)=>setPriority(e.target.value)}
        className="rounded-lg border border-amber-200 bg-amber-50 text-slate-700 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
              <button type="submit" className="bg-[#6c63ff] text-white font-medium px-6 py-2.5 rounded-lg
        shadow-[0px_4px_0px_#4a42d4]
        hover:shadow-[0px_8px_0px_#4a42d4]
        hover:-translate-y-1
        transition-all duration-200">
        Add
      </button>

        </form>
    );
}