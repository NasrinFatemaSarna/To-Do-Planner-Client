
import axios from 'axios';
import { toast } from 'react-toastify';
const BaseUrl = 'https://to-d0-planner-server.onrender.com/api/v1/';




export function RegistrationRequest(firstName, lastName, email, password, photo) {
    const url = `${BaseUrl}/registration`;
    const postBody = {
        firstName: firstName,
        lastName: lastName,
        Email: email,
        Password: password,
        photo: photo
    };
    return axios.post(url, postBody)
    .then((response) => {
        if (response.status === 200) {
            if (response.data.status=== "fail") {
                if( response.data.data.keyPattern.email=== 1){
                    toast.error("Email already exists");
                    return false;
                } 
                else {
                    toast.error("Something went wrong");
                    return false;
                }
            } 
            else {
                toast.success("Registration Successful");
                return true;
            }
        } 
        else {
            toast.error("Something went wrong");
            return false;
        }
    })
    .catch((error) => {
        toast.error("Something went wrong");
        return false;
    });
}





