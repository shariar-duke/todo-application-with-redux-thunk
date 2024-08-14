import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  // useSelector hook ta ekhnkar current state take ekta object tar name state tar modhe dhukay dey
  const todos = useSelector((state) => state.todos);

  const filters = useSelector((state) => state.filters);
  const filterByStatus =(todo) => 
  {
    const { status } = filters;
    switch (status) {
      case "Incomplete":
        return !todo.completed;

      case "Complete":
        return todo.completed;

      default:
        return true;
    }
  }

  const filterByColors =(todo)=> 
  {
    const { colors } = filters;

    if (colors.length == 0) {
      return true;
    } else {
      if (colors.includes(todo.color)) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <div className="border-b-[1px] border-gray-300 pb-[12px]">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors) 
        .map((todo) => (
          <TaskItem todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
