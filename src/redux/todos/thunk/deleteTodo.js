import { deleted } from "../actions";

const deleteTodo = (todoId) => {

  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: "DELETE",
       
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      dispatch(deleted(todoId));

    
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };
};

export default deleteTodo;
