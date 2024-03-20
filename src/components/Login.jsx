import  { useState } from 'react'
import Lottie from "lottie-react";
import loginAni from "../../public/animation/login2.json";
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   


    const[emailError, setEmailError] = useState(false);
    const[passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
   
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
         email !== "" && password !==  "" && password ) 
        { alert("Login Successful");
       
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
                       
                        <input onChange={handleEmail} className='w-full capitalize text-black font-roboto font-bold p-2 my-2 outline-none border-primary border rounded-lg' type="email" placeholder='Enter your Email' />
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
                      
                        <button type='submit' className='bg-septenary text-secondary hover:text-white py-2 mt-3 text-center text-lg w-full font-roboto font-semibold rounded-lg transition-all duration-75 hover:bg-primary'>Login</button>
                        <p className='mt-5 font-bold text-base font-roboto'> Don't have an account? <Link to="/registration" className='text-yellow-400 font-bold font-roboto font-lg'>Registration</Link></p>

                    </form>
                    

                </div>
            </div>

        </div>
        
    );
};

export default Login;

