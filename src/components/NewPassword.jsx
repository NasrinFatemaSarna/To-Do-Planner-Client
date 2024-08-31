import { useState } from "react";
import { ResetPasswordRequest } from "../Api/Api"
import { getEmail, getOtp } from "../helper/SessionHelper";
import { useNavigate } from "react-router-dom";



const NewPassword = () => {
    const [password,setPassword] = useState("")

    const navigate=useNavigate("")


    const handleChangePassword = () => {
        if(password==""){
            alert("Enter Password")
        }
        else{
           ResetPasswordRequest(getEmail(),getOtp, password)
           .then(( response ) => {
            if(response===true){
                navigate("/login")
            // localStorage.clear()
            }
           
           })
        }
    }



    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className=" bg-orange-300 rounded-lg p-5 w-[500px] flex flex-col items-center gap-3">
            <h1 className="text-center mb-7 text-black font-bold text-2xl ">Set New Password</h1>
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="New Password"  className="p-2 my-2 bg-secondary text-white rounded-lg mt-4 text-2xl"/>
            <button onClick={handleChangePassword} className=" p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Submit</button>
            

            </div>
        </div>
    );
};

export default NewPassword;