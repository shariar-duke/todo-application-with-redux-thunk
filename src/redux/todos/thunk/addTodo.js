import { added } from "../actions";

const addTodo = (todoText) => {

    console.log("The todo text is", todoText)
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:9000/todos", {
        method: "POST",
        body: JSON.stringify({
          text: todoText,
          completed: false,
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
        dispatch(added(todo?.text));
      } else {
        console.error('Invalid todo item:', todo);
      }
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };
};

export default addTodo;
