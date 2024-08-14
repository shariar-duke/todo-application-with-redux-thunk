import { useDispatch } from "react-redux";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";
export default function Taskboard() {
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <Header />
      <div className="flex justify-between my-4 text-xs text-gray-500 border-b-[1px] border-gray-300 pb-[12px]">
        <div className="flex space-x-2 cursor-pointer">
          <img
            src="/images/double-tick.png"
            className="h-4 w-4"
            alt="dobuletick"
          />
          <span
            onClick={() => {
              dispatch(allCompleted());
            }}
          >
            Complete All Tasks
          </span>
        </div>
        <span
          onClick={() => {
            dispatch(clearCompleted());
          }}
          className="cursor-pointer"
        >
          Clear completed
        </span>
      </div>
      <TaskList />
      <Footer />
    </div>
  );
}
