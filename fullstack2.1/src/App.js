import {BrowserRouter, Routes,  Route,} from "react-router-dom"
import Layout from "./Layout"
import Contact from "./Contact"
import Homes from "./Homes"
import About from "./About"
import Counter from "./Counter"
import Effect from "./Effect"
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      
          <Route path="/"element={<Layout/>}>
            <Route index element={<Homes/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="effect" element={<Effect/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}