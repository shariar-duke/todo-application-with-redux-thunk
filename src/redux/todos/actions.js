import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes.js"

// this is for LOADED

export const loaded =(todos) => 
{
   return {
    type : LOADED, 
    payload : todos
   }
}

// this is for ADDED 
export const added =(todoText)=> 
{
    return {
       type : ADDED, 
       payload: todoText
    }
}

// this is for toggled 
export const toggled =(todoId)=> 
    {
        return {
           type : TOGGLED, 
           payload: todoId
        }
    }

// this is for colorSelected  // this means amra kno ekta todo te ekta color select korbo 

export const colorSelected =(todoId , color) => 
{
  return {
    type: COLORSELECTED, 
    payload : {
        todoId : todoId,
        color : color
    }

  }
}

// this is for delete a todo 

export const deleted =(todoId)=> 
{
    return {
        type : DELETED, 
        payload : todoId
    }
}

// this one is for all completed 

export const allCompleted =() => {
    return {
        type : ALLCOMPLETED, 
    }
}

// this is for clearCompleted 

export const clearCompleted =() => 
{
    return {
        type : CLEARCOMPLETED, 
    }
}
