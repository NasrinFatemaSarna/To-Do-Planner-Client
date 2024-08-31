import { Link } from "react-router-dom";
import { GetAuthToken } from "../helper/SessionHelper";

const PageNotFound = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div> 
                <h1 className="text-5xl text-center text-blue-600">Page Not Found</h1>
                {/* <div className="flex justify-center mt-5 gap-5">
                    {GetAuthToken() ? 
                    <>
                     <Link to="/login" className="text-white bg-quaternary hover:bg-blue-700 px-10 py-2 font-roboto font-bold rounded-lg">Login</Link>
                     <Link to="/registration" className="text-white bg-quaternary hover:bg-blue-700 px-10 py-2 font-roboto font-bold rounded-lg">Registration</Link>
                    </>
                    :
                    <Link to="/" className="text-white bg-quaternary hover:bg-blue-700 px-10 py-2 font-roboto font-bold rounded-lg">Home</Link>

                      
                    } */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default PageNotFound;
