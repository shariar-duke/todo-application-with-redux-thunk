import { Provider } from "react-redux"
import Navbar from "./components/Navbar"
import Taskboard from "./components/Taskboard"
import store from "./redux/store"
export default function App() {
  return (

    <Provider store={store}>
      <div className="bg-[#F0FFF0]">
      <Navbar/>
      <div className="min-h-[90vh] flex justify-center items-center">
        <Taskboard/>
      </div>
    </div>
    </Provider>
 
  )
}