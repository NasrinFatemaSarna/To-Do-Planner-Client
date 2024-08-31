import VerificationInput from "react-verification-input";
import { useState } from "react";
import { OtpVerifyRequest } from "../Api/Api"
import { getEmail } from "../helper/SessionHelper";
import { useNavigate } from "react-router-dom";



const Otp = () => {

    const [otp,setOtp] = useState("0")
    const [otpError,setOtpError] = useState("")
    const navigate = useNavigate("")



    const handleVerifyOtp = () => {
        if(otp.length===6){
           OtpVerifyRequest(getEmail(),otp)
           .then((response) => {
            if(response===true){
                navigate("/reset-password")
            }
            else{
                setOtpError("invalid Otp")
            }
               
           })
        

        }
        else{
            setOtpError("valid Otp")
        }
    }



    return (
       
            <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className=" bg-orange-300 rounded-lg p-5 w-[500px] flex flex-col items-center gap-3">
            <h1 className="text-center mb-7 text-black font-bold text-2xl ">OTP</h1>
            <VerificationInput validChars="0123456789" onChange={ (e) => setOtp(e)} />
            <p className="text-red-500 font-roboto font-bold bg-slate-400">{otpError}</p>
            <button onClick={handleVerifyOtp} className=" p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Submit</button>
            

            </div>
        </div>
    );
};

export default Otp;