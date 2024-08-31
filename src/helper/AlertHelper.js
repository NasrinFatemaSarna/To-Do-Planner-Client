
import Swal from 'sweetalert2';
import { DeleteTodo, TodoListByStatus, UpdateTodo } from '../Api/Api';
export function DelateAlert(id) {

    return  Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return DeleteTodo(id)
          .then((result) => {
            if(result===true){
                TodoListByStatus("New");
                return result
            }
          })
        }
      })
   
    
    
}
export function UpdateAlert(id,status) {
    return  Swal.fire({
        title: "Update Status",
        input: "select",
        inputOptions: {Progress: "Progress",New: "New",Canceled: "Canceled",Completed: "Completed",},
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        inputValue: status,
      }).then((result) => {
        if (result.isConfirmed) {
        
          return UpdateTodo(id,result.value)
          .then((result) => {
            if(result===true){
                TodoListByStatus("New");
                return result
            }
          })
        }
      });

    } 