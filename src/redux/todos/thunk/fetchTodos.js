import { loaded } from "../actions";
// ei thunk function ta ekta api call kore ekta data nia asbe then ekta actual action dispatch kore dibe 
const fetchTodos = async (dispatch , getState) => 
{
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json()
  // api fetch kora ses ekhn amar kaj actual action gula dispatch kore dawa...

  dispatch(loaded(todos))
}

export default fetchTodos;