
import { useState } from "react";
import  {CreateTodoApi}  from  '../Api/Api'; // Corrected function name
import { useNavigate } from "react-router-dom";


const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleCreate = () => {
        if (title && description) {
            CreateTodoApi(title, description) // Corrected function name
                .then((result) => {
                    if (result) {
                        navigate("/new-plan");
                    } else {
                        alert("Todo creation failed");
                    }
                })
                .catch((error) => {
                    console.error("Error creating todo:", error);
                    alert("Something went wrong");
                });
        } else {
            alert("Please enter title and description");
        }
    };
    console.log(title, description);

    return (
        <div>
            <h1 className="text-3xl text-center text-black font-roboto font-bold my-10 ">This is Create Todo</h1>
            <div className="w-[600px] mx-auto">
                <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="mt-5 px-3 py-2 text-black focus:border-red-600 outline-none rounded-lg font-bold font-roboto border-2 w-full focus:bg-gray-300 border-green-300" 
                    type="text" 
                    placeholder="Todo Title" 
                />
                <textarea 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="mt-5 px-3 py-2 rounded-lg outline-none focus:border-red-600 border-2 font-bold font-roboto border-green-500 w-full focus:bg-gray-300" 
                    type="text" 
                    placeholder="Todo Description"
                ></textarea>
                <button 
                    onClick={handleCreate} 
                    className="mt-5 px-3 py-2 bg-green-500 text-white hover:text-red-600 hover:bg-gray-700 rounded-lg font-bold font-roboto"
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreateTodo;





// import { useState } from "react";
// import { CreateTodoApi } from "../Api/Api";
// import { useNavigate } from "react-router-dom";

// const CreateTodo = () => {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const navigate = useNavigate();

//     const handleCreate = () => {
//         if (title && description) {
//             CreateTodoApi(title, description)
//                 .then((result) => {
//                     if (result) {
//                         navigate("/new-plan");
//                     } else {
//                         alert("Todo creation failed");
//                     }
//                 })
//                 .catch((error) => {
//                     console.error("Error creating todo:", error);
//                     alert("Something went wrong");
//                 });
//         } else {
//             alert("Please enter title and description");
//         }
//     };
//     console.log(title, description);

//     return (
//         <div>
//             <h1 className="text-3xl text-center text-black font-roboto font-bold my-10 ">This is Create Todo</h1>
//             <div className="w-[600px] mx-auto">
//                 <input 
//                     onChange={(e) => setTitle(e.target.value)} 
//                     className="mt-5 px-3 py-2 text-black focus:border-red-600 outline-none rounded-lg font-bold font-roboto border-2 w-full focus:bg-gray-300 border-green-300" 
//                     type="text" 
//                     placeholder="Todo Title" 
//                 />
//                 <textarea 
//                     onChange={(e) => setDescription(e.target.value)} 
//                     className="mt-5 px-3 py-2 rounded-lg outline-none focus:border-red-600 border-2 font-bold font-roboto border-green-500 w-full focus:bg-gray-300" 
//                     type="text" 
//                     placeholder="Todo Description"
//                 ></textarea>
//                 <button 
//                     onClick={handleCreate} 
//                     className="mt-5 px-3 py-2 bg-green-500 text-white hover:text-red-600 hover:bg-gray-700 rounded-lg font-bold font-roboto"
//                 >
//                     Create
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CreateTodo;
