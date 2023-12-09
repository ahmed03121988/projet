
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import {Routes,Route} from "react-router-dom"





function App() {

  return (
    <div className="wrapper">

<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>





      
    </div>
  );
}
export default App;
