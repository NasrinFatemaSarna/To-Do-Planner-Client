

import { useEffect } from "react";
import { TodoListByStatus } from "../Api/Api";
import { useSelector } from "react-redux";
import { DelateAlert, UpdateAlert } from "../helper/AlertHelper";



const ProgressTodo = () => {
    useEffect(() => {
        TodoListByStatus("Progress");
    }, []);
    
    const progressPlans = useSelector((state) => state.todos.Progress);

    const handleDelete = (id) => {
      DelateAlert(id)
     .then((result) => {
        if(result===true){
            TodoListByStatus("Progress");
            return result
        }
     })
    }

    const handleUpdate = (id,status) => {
        UpdateAlert(id,status)
        .then((result) => {
            if(result===true){
                TodoListByStatus("Progress");
                return result
            }
        })
      
    }
  
   
    
    return (
        <div className="pr-10">
        <h1 className="text-3xl text-center text-black font-roboto font-bold my-10">Progress todo</h1>

        {progressPlans.length > 0 &&
            <div className="flex justify-between gap-y-8 flex-wrap">
                {progressPlans?.map((item, i) => (
                    <div key={i} className="w-[32%] p-5 bg-opacity-[.3] bg-primary rounded-lg">
                        <h2 className="text-lg text-center text-black font-roboto font-bold">{item.title}</h2>
                        <p className="text-center text-base my-1 text-black font-roboto">{item.description}</p>
                        <div className="flex justify-between items-center mt-3">
                            <div className="flex gap-5">
                                <button onClick={() => handleUpdate(item._id, item.status)} className="text-white bg-quaternary px-3 mt-5 hover:bg-blue-700 py-1 font-roboto font-bold rounded-lg">Update</button>
                                <button onClick={() => handleDelete(item._id)} className="text-white bg-quaternary px-3 mt-5 hover:bg-blue-700 py-1 font-roboto font-bold rounded-lg">Delete</button>
                            </div>
                            <p className="text-center text-sm hover:bg-red-600 bg-amber-500 rounded-lg my-1 text-black font-roboto mt-5">{item.createdDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        }
    </div>
    );
};

export default ProgressTodo;
