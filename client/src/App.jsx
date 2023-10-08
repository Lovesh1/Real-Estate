import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Sign_in from "./pages/Sign_in"
import Sign_out from "./pages/Sign_out"
import About from "./pages/About"
import Profile from "./pages/profile"
import Nav from "./components/Nav"


export default function App() {
  return (
    <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Sign_in/>}/>
          <Route path="/sign-out" element={<Sign_out/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </Router>
  )
}
