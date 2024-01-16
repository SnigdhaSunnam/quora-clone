import './App.css';
import Home from "./pages/home/home.jsx";
import Auth from "./pages/auth/auth.jsx";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path='' Component={Home}></Route>
      <Route path='auth' Component={Auth}></Route>
    </Routes>
  );
}

export default App;
