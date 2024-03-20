
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import CreateTodoPage from "./pages/CreateTodoPage"
import ProgressTodoPage from "./pages/ProgressTodoPage"
import CompletedTodoPage from "./pages/CompletedTodoPage"
import NewTodoPage from "./pages/NewTodoPage"
import CanceledTodoPage from "./pages/CanceledTodoPage"
import ProfilePage from "./pages/ProfilePage"
import Login from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Registration" element={<RegistrationPage/>}></ Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>

        <Route path="/new-plan" element={<CreateTodoPage/>}></Route>
        <Route path="/progress-plan" element={<ProgressTodoPage/>}></Route>
        <Route path="/completed-plan" element={<CompletedTodoPage/>}></Route>
        <Route path="/todo-plan/" element={<NewTodoPage/>}></Route>
        <Route path="/canceled-plan" element={<CanceledTodoPage/>}></Route>
         
       


    </Routes>
</BrowserRouter>

    </>
  )
}

export default App


// api link
// https://to-d0-planner-server.onrender.com/.....
//  
