
import { useState } from "react"
import { SendEmailVerificationRequest } from "../Api/Api"
import { useNavigate } from "react-router-dom"
import { ColorRing } from 'react-loader-spinner'




const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate()

    const handleSendEmail = () => {
        if (email.length===0) {
            setEmailError("Please Enter your Email")
        }
        else{
            setLoading(true);
            SendEmailVerificationRequest(email)
            .then((response) => {
                if(response== true){
                    setLoading(false);
                    navigate("/verify-otp")

                }
                else{
                    setEmailError("User not found")
                    setLoading(false);

                }
            })
        }
    }





    return (
        <div className="flex justify-center items-center h-screen bg-slate-500">
            <div className=" bg-white rounded-lg p-5 w-[500px]">
            <h1 className="text-center mb-7 text-black font-bold text-2xl ">Forgot Password</h1>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-2 my-2 outline-none font-roboto font-bold border-primary border rounded-lg" placeholder="Enter your Email" />
            <p className="text-red-500 font-roboto font-bold bg-slate-400">{emailError}</p>

            
            {
                            
                            loading?
                            <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
                            :
                            <button onClick={handleSendEmail} className="w-full p-2 my-2 bg-primary text-white rounded-lg mt-4 text-2xl">Send</button>

            }

            </div>
        </div>
    );
};

export default ForgotPasswordPage;