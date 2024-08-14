import { toggled } from "../actions";

const updateTodo = (todoId, currentStatus) => {

  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const todo = await response.json();
      console.log('Received todo from server:', todo); // Add this line

      // Ensure the response contains the expected properties
      if (todo) {
        dispatch(toggled(todo?.id));
      } else {
        console.error('Invalid todo item:', todo);
      }
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };
};

export default updateTodo;
