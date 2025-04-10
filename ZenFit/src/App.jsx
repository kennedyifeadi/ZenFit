import { BrowserRouter } from "react-router-dom"
import { AnimatedRoutes } from "./Routes/AnimatedRoutes"
import { Nav } from "./Layout/Nav"
import { Footer } from "./Layout/Footer"
import { Newsletter } from "./Layout/Newsletter"

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-col bg-[#000000]">
        <Nav/>
        <AnimatedRoutes/>
        <Newsletter/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
