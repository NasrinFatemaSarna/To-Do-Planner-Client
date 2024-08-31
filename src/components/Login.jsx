import  { useState } from 'react'
import Lottie from "lottie-react";
import loginAni from "../../public/animation/login2.json";
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import { ColorRing } from 'react-loader-spinner'
import { LoginRequest } from '../Api/Api';

const Login = () => {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[emailError, setEmailError] = useState(false);
    const[passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();
 
   
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

      // email regex
      var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;





const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
}
const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
}

const handleLogin = (e) => {
    e.preventDefault();

    if(!email.match(regex)){
        setEmailError("Invalid Email");
    }


    if(email === ""){
        setEmailError("Please Enter your Email");
    }
    if(password === ""){
        setPasswordError("Please Enter your Password");
    }

  
   
    if (
         email !== "" && password !==  "" && password ) {
            setLoading(true);
            // console.log("email",email,"password",password)
          LoginRequest(email, password)
          .then((response) => {
            if(response===true){
                setLoading(false);
                // navigate("/");
                window.location.href="/";

            }
            
             else{
                setLoading(false);
                if(response.massage === "user not found"){
                    setEmailError("user not found");
             }
              if(response.massage === "wrong password"){
                setPasswordError("wrong password");
             }
            }
             
             
 
             })
            
          
    
}
}







    return (
        <div className='bg-sky-400 flex items-center h-screen'>
            <div className=' container px-2 flex justify-between items-center mx-auto '>
                <div className=' hidden md:block w-[60%]'>
                    <h1 className='text-3xl text-quaternary font-roboto font-bold'>Welcome to Todo Planner Platform</h1>
                    <Lottie animationData={loginAni} loop={true} className='w-[60%]'   />
                </div>
                <div className='w-full md:w-[50%]'>
                <form className=' bg-quaternary border-lg p-8 px-4' onSubmit={handleLogin}>
                    <h1 className='text-4xl text-septenary font-roboto font-bold text-center mb-4'>Login</h1>
                       
                        <input onChange={handleEmail} className='w-full  text-black font-roboto font-bold p-2 my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
                        <p className='text-black my-1 '>{emailError}</p>

                        <div className='relative'>
                        {
                            showPassword ? 
                            <IoEye onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoEye>
                            :
                            <IoMdEyeOff onClick={togglePassword} className='absolute top-1/2 right-5  text-2xl transform -translate-y-1/2 cursor-pointer text-primary' ></IoMdEyeOff>
                            }

                        <input onChange={handlePassword} className='w-full border capitalize text-black font-roboto font-bold px-2 border-secondary rounded-lg py-2 my-2 ' type={showPassword ? "text" : "password"} placeholder='Enter your Password' />
                        </div>
                        <p className='text-black my-1 '>{passwordError}</p>

                        {
                            loading?
                            <div className='flex justify-center mt-2 '><ColorRing></ColorRing></div>
                            :
                            <button type="submit" className='w-full bg-primary text-septenary font-roboto font-bold p-2 my-2 rounded-lg'>Login</button>
                            }
                             <p className='mt-5 font-bold text-base font-roboto'> Don't have an account? <Link to="/registration" className='text-yellow-400 font-bold font-roboto font-lg'>Registration</Link></p>
                             <Link to="/forgot-password"><p className='text-black mt-2 inline-block font-bold font-roboto font-lg'>Forgot Password?</p></Link>

                    </form>
                    

                </div>
            </div>

        </div>
        
    );
};

export default Login;

