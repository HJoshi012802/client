import {Route, Routes} from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      {/* <Route path='intrest' element={<CreateIntrest/>}/>
      <Route path='jobs' element={<Job/>}/> */}
    </Route>
    </Routes>
  )
}

export default App
