/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { colorSelected, deleted, toggled } from "../redux/todos/actions";
export default function TaskItem({ todo }) {
  const dispatch = useDispatch()
  const {id , text , completed , color} = todo
  
  function handleToggle () 
  {
    // toggled function ta ekta id receive kore
     dispatch(toggled(id))
  }

  function handleColor (color) 
  {

    dispatch(colorSelected(id,color))
  }

  function handleDelete() 
  {
   dispatch(deleted(id))
  }
  
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-[10px] mt-[4px] ">
        {/* <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500">
          
        </div> */}

        <div
          onClick={handleToggle}
          className={`flex items-center justify-center w-4 h-4 rounded-full border-2 cursor-pointer ${" border-green-500"}`}
        >
          {
            completed &&   <svg
            className="w-4 h-4 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          }
        
        </div>

        <p className={`${completed && "line-through"}`}>{text}</p>
      </div>

      <div className="flex gap-[10px]">
        <div onClick={()=>handleColor("green")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === "green" && "bg-green-500"} border-green-500 hover:bg-green-500`}></div>
        <div onClick={()=>handleColor("yellow")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === "yellow" && "bg-yellow-500"}  border-yellow-500 hover:bg-yellow-500`}></div>
        <div onClick={()=>handleColor("red")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === "red" && "bg-red-500"}  border-red-500 hover:bg-red-500`}></div>
        <img
          onClick={handleDelete}
          src="/images/cancel.png"
          className="h-4 w-4 cursor-pointer"
          alt="cancel"
        />
      </div>
    </div>
  );
}
