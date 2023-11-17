import "./App.css";
import Dashboard from "./Components/Dashboard";
import {Routes,Route, Navigate} from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";



function App() {
  return (
    <Routes>  
    <Route path="/" element={<Navigate to="/login"/>} />
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/dashbord' element={<Dashboard/>}/>
  </Routes>
  );
}

export default App;
