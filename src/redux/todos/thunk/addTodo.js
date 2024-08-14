import { added } from "../actions";
// ei thunk function ta ekta api call kore ekta data nia asbe then ekta actual action dispatch kore dibe 
const addTodo = (todoText) =>  {

    return async (dispatch) => 
    {
        const response = await fetch("http://localhost:9000/todos" , {
          method:"POST", 
          body : JSON.stringify({
            text:todoText,
            completed:false,
          }),
          headers:{
            "Content-tyype": "application/json"
          }

        });
        const todo = await response.json()
      // ekhn j todo ta post kora hoilo oi single todo ta ekhne pawa jabe...
      
        dispatch(added(todo.text))
    }
}
    


export default addTodo;