import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions"; // Ensure correct import paths

const numberofTodos = (todos) => {
    switch (todos) {
        case 0:
            return "No tasks";

        case 1:
            return "1 task";

        default:
            return `${todos} tasks`;
    }
}

export default function Footer() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);

    const todoRemaining = todos.filter((todo) => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    }

    const { status, colors } = filters;

    const handleColorChange = (color) => {


        if (colors.includes(color)) {
            dispatch(colorChanged(color, "remove"));
        } else {
            dispatch(colorChanged(color, "added"));
        }
    }

    console.log("All the colors are", colors)

    return (
        <div className="flex justify-between mt-[10px]">
            <p className="text-[12px] text-gray-600">{numberofTodos(todoRemaining)} left</p>
            <div className="flex gap-[4px]">
                <p onClick={() => handleStatusChange("All")} className={`${status === "All" && "font-bold"} cursor-pointer text-[12px] text-gray-600`}>All</p>
                <p className="text-[12px] text-gray-600">|</p>
                <p onClick={() => handleStatusChange("Incomplete")} className={`${status === "Incomplete" && "font-bold"} cursor-pointer text-[12px] text-gray-600`}>Incomplete</p>
                <p className="text-[12px] text-gray-600">|</p>
                <p onClick={() => handleStatusChange("Complete")} className={`${status === "Complete" && "font-bold"} cursor-pointer text-[12px] text-gray-600`}>Complete</p>
                <div className="flex gap-[4px] items-center">
                    <div onClick={() => handleColorChange("green")} className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ${colors.includes("green") && "bg-green-500"} cursor-pointer border-green-500 hover:bg-green-500`}></div>
                    <div onClick={() => handleColorChange("yellow")} className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ${colors.includes("yellow") && "bg-yellow-500"} cursor-pointer border-yellow-500 hover:bg-yellow-500`}></div>
                    <div onClick={() => handleColorChange("red")} className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ${colors.includes("red") && "bg-red-500"} cursor-pointer border-red-500 hover:bg-red-500`}></div>
                </div>
            </div>
        </div>
    )
}
