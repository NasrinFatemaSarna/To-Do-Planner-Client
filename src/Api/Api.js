
import axios from 'axios';
import { toast } from 'react-toastify';
import { GetAuthToken, SetAuthToken, SetUserDetails, logOut, setEmail, setOtp } from '../helper/SessionHelper';
import { setProfile } from '../redux/Slices/profileSlice';
import store from '../redux/store/store';
import { setCanceled, setCompleted, setProgress,setNew } from '../redux/Slices/todosSlice';
import { setTotal } from '../redux/Slices/plansummarySlice';


const baseUrl = 'https://to-d0-planner-server.onrender.com/api/v1';



const token = { 
    headers: {token:GetAuthToken()}
};



// register start
export function RegistrationRequest(firstName, lastName, email, password, photo) {
    const url = `${baseUrl}/registration`;
    const postBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
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
                    toast.error(" Something went wrong");
                    return false;
                }
            } 
            else  {
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
// login start



export function LoginRequest(email, password) {
  
    const url = baseUrl + "/login";
    const postBody = {
        email:email,
        password:password
    }
    
    return axios.post(url, postBody)
        .then((response) => {
            if(response.status=== 200){
                if(response.data.status=== 'fail'){
                    if(response.data.data==="user not found"){
                        return{ massage: "user not found"}
                        }
                    else if(response.data.data==="wrong password"){
                        return{ massage: "wrong password"}
                    }
                    else{
                        toast.error("Something went wrong");
                        return false
                    }
                 }
                else{
                    SetAuthToken(response.data.token);
                    SetUserDetails(response.data.data);
                    toast.success("login successful");
                    // console.log("user details",response.data.data,"token",response.data.token);
                    return true
                }

            }
            else{
                toast.error("Something went wrong");
                return false;}
            }
            
        )
        .catch((error) => {
            toast.error("Something went wrong");
            return false
        })
    }
// send email verification request to the user
export function SendEmailVerificationRequest(email) {

    const url = baseUrl+ `/recover-verify-email/${email}`;
    return axios.get(url)

        .then((response) => {
            if(response.status=== 200){
                if(response.data.status=== 'fail'){
                    
                    toast.error("User not found");
                    return false
                 }
                else{
                    toast.success("Email sent successfully");
                    setEmail(email)
                    return true
                }
               

            }
          
            else{
                toast.error("Something went wrong");
                return false
            }
        })
        .catch((error) => {
            toast.error("Something went wrong");
            return false
        })
    
}

// otp verify request

export function OtpVerifyRequest (email,otp) {

    let url = `${baseUrl}/verify-otp/${email}/${otp}`;

    return axios.get(url)
    .then((response) => {
        if(response.status=== 200){
            if(response.data.status=== 'fail'){
                toast.error("Otp not matched");
                return false
            }
            else{
                setOtp(otp)
                toast.success("Otp verified successfully");
                return true
            }
    }
    else{
        toast.error("Something went wrong");
        return false
    }
    })


}

// reset password

export function ResetPasswordRequest(email,otp,password) {

    let url = baseUrl+"/reset-password"

    let postBody ={
        email:email,
        otp:otp,
        password:password
    };


return axios.post(url,postBody)
    .then((response) => {
        if(response.status=== 200){
            return true
        }
            
    })
    .catch((error) => {
        toast.error(" Something went wrong");
        return false
    })
    

}

// get profile details
export function GetProfileDetails() {

    let url = baseUrl + "/profile-details"

    return axios.get(url,token)
    .then((response) =>{
       if(response.status===200 ){
          store.dispatch(setProfile(response.data.data))
          return true
       }
        else{

            toast.error("Something went wrong");
            return false
          
        }
    })
    .catch((error) => {
       if(error.response&&error.response.status===401){
        toast.error("Something went wrong");
        // logOut();
        console.log("error",error)
    }
        else{
            toast.error("Something went wrong");
            return false
        }

       
    })
}

// profile update
export function ProfileUpdate(firstName,lastName,email,photo) {
    let url = baseUrl + "/profile-update"
    let postBody = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        photo:photo
    }
    let userDetails ={
        firstName:firstName,
        lastName:lastName,
        email:email,
        photo:photo
    }

    return axios.post(url,postBody,token)
    .then((response) =>{
        if(response.status===200 ){
           toast.success("Profile updated successfully");
           SetUserDetails(userDetails);
            return true
        }
        else{
            toast.error("Something went wrong");
            return false
        }
    })
    .catch((error) => {
        if(error.response&&error.response.status===401){
         toast.error("Something went wrong");
         logOut();
         console.log("error",error)
     }
         else{
             toast.error("Something went wrong");
             return false
         }
 
     })

}

// create todo start 
 export function CreateTodoApi(title,description) {
        let url = baseUrl + "/create-todo";
    
        let body ={
            title:title,
            description:description,
            status:"new"
        }
        return axios.post(url,body,token)
        .then((response) =>{
            if(response.status===200 ){
               toast.success("Todo created successfully");
              return true
            }
            else{
                toast.error("Something went wrong");
                return false
            }
        })
        .catch((error) => {
            if(error.response&&error.response.status===401){
             toast.error("Something went wrong");
             logOut();
             console.log("error",error)
         }
             else{
                 toast.error("Something went wrong");
                 return false
             }
            
            })
    
    }  

// todo list by status start
export function TodoListByStatus(status) {

    let url = baseUrl+ `/todo-list-by-status/${status}`;
    return axios.get(url,token)
    .then((response) =>{
       if(response.status===200 ){
          if(status=="New"){
            store.dispatch(setNew(response.data.data))
          
          }
          else if(status=="Canceled"){
            store.dispatch(setCanceled(response.data.data))
          }
          else if(status=="Completed"){
            store.dispatch(setCompleted(response.data.data))
          }
          else if(status=="Progress"){
            store.dispatch(setProgress(response.data.data))
          }
          return true
       }
       else{
           toast.error("Something went wrong");
           return false
       }
    })
    .catch((error) => {
        if(error.response&&error.response.status===401){
         toast.error("Something went wrong");
         logOut();
         console.log("error",error)
     }
         else{
             toast.error("Something went wrong");
             return false
         }
 
     })

}

// delete todo start

export function DeleteTodo(id) {

    let url = baseUrl+ `/delete-todo/${id}`;
    return axios.get(url,token)
    .then((response) =>{
       if(response.status===200 ){
          toast.success("Todo deleted successfully");
          return true
       }
       else{
           toast.error("Something went wrong");
           return false
       }
    })
    .catch((error) => {
        if(error.response&&error.response.status===401){
         toast.error("Something went wrong");
         logOut();
         console.log("error",error)
     }
         else{
             toast.error("Something went wrong");
             return false
         }
    })
}

// update todo start
export function UpdateTodo(id,status) {

    let url = baseUrl+ `/update-todo-status/${id}/${status}`;
   return axios.get(url,token)
    .then((response) =>{
       if(response.status===200 ){
          toast.success("Todo updated successfully");
          return true
       }
       else{
           toast.error("Something went wrong");
           return false
       }
    })
    .catch((error) => {
        if(error.response&&error.response.status===401){
         toast.error("Something went wrong");
         logOut();
         console.log("error",error)
     }
    })
}

// summary start
export function AllPlans() {

    let url = baseUrl+ `/todo-count-by-status`;
    return axios.get(url,token)
    .then((response) =>{
       if(response.status===200 ){
          store.dispatch(setTotal(response.data.data))
          return true
       }
       else{
           toast.error("Something went wrong");
           return false
       }
    })
    .catch((error) => {
        if(error.response&&error.response.status===401){
         toast.error("Something went wrong");
         logOut();
         console.log("error",error)
     }
    })
    
}