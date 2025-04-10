import { BrowserRouter } from "react-router-dom"
import { AnimatedRoutes } from "./Routes/AnimatedRoutes"

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-col">
     
        <AnimatedRoutes/>
       
      </div>
    </BrowserRouter>
  )
}

export default App
