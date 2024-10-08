/* eslint-disable no-case-declarations */
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

// ei function er kaj hbe amar todo list a sob theke boro i er sathe amar 1 add korte hbe 
function nextTodoId (todos) 
{
   const maxId = todos.reduce((maxId, todo)=> Math.max(maxId, todo.id) , -1 )
   return maxId + 1;
}

const reducer =(state = initialState, action) => 
{
  switch(action.type) 
  {

     // case for added
     case LOADED : 
     return action.payload

     
    // case for added
   case ADDED : 
       return [...state, {
        id : nextTodoId(state),
        text: action.payload, 
        completed:false,
       }]
   // case for toggled 
   case TOGGLED: 
        return state.map((todo)=> {
            if(todo.id!== action.payload)
            {
                return todo
            }
            return {
                ...todo, 
                completed: !todo.completed
            }
        })
    
    case COLORSELECTED:
        const {todoId , color} = action.payload;

        return state.map((todo) => {
            if(todo.id !== todoId) 
            {
              return todo
            }

            return {
                ...todo, 
                color : color
            }
        })

    case DELETED:
        
        return state.filter((todo) => todo.id!==action.payload)
       

    case ALLCOMPLETED:
        return state.map((todo)=> {
            return {
                ...todo, 
                completed : true,
            }
        })

    case CLEARCOMPLETED :
        return state.filter((todo)=> !todo.completed)

    default:
        return state;


   
       
}
}


export default reducer