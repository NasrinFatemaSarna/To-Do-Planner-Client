import { useEffect, useState } from "react";
import { GetProfileDetails, ProfileUpdate} from "../Api/Api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";





const Profile = () => {
    const profile = useSelector(state => state.profile.profile);
   const navigate=useNavigate()

    // Initialize state values with profile data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");


    // api call start

    useEffect(() => {
        GetProfileDetails()
        .then(() => {
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
            setEmail(profile.email);
            setPhoto(profile.photo);
           
        });
    } , [ profile.firstName, profile.lastName, profile.email, profile.photo ]);

   
    // api call end

    // convert base 64 to image function start

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPhoto(base64);
        
    }
   


    // convert base 64 to image function end

    const handleSubmit = () => {
       if(firstName && lastName && email && photo){
       ProfileUpdate(firstName,lastName,email,photo)
       .then((result) => {
           if(result){
            toast.success("Profile updated successfully");
            navigate("/")
            console.log("result",result)
           }
          
        
       })
       }
       else{
        toast.error("All fields are required");
       }
         
     };



    return (
        <div className="p-20">
           <div className="bg-white h-[150px] w-[150px] overflow-hidden rounded-full">
            <img className="h-full w-full object-cover" src={photo?photo:profile?.photo} alt="" />
           </div>
           <input onChange={handleImage}  type="file" className="mt-5 border-2 border-gray-300 p-2" />
           <div className="mt-5 w-[400px]">
            <input readOnly defaultValue={profile.email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email " className="border-2 bg-slate-400 rounded-lg border-gray-300 px-2 py-1 text-base w-full outline-none hover:bg-secondary hover:text-white " />
        </div>
        <div className="mt-5 w-[400px]">
            <input defaultValue={profile.firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name " className="border-2 rounded-lg border-gray-300 px-2 py-1 text-base w-full outline-none hover:bg-secondary hover:text-white " />
        </div>
        <div className="mt-5 w-[400px]">
            <input defaultValue={profile.lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder=" Last Name " className="border-2 rounded-lg border-gray-300 px-2 py-1 text-base w-full outline-none hover:bg-secondary hover:text-white " />
        </div>

        <button onClick={handleSubmit} className="px-20 my-10 bg-primary text-white hover:text-black py-1 rounded-lg mt-5 text-base hover:bg-septenary">Update</button>




        </div>
    )
};

export default Profile; 

