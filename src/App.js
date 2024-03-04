import './App.css';
import Home from "./pages/home/home.jsx";
import Auth from "./pages/auth/auth.jsx";
import {Routes, Route} from "react-router-dom";
import Answer from './pages/answer/answer.jsx';
function App() {
  return (
    <Routes>
      <Route path='' Component={Home}></Route>
      <Route path='auth' Component={Auth}></Route>
      <Route path='answer' Component={Answer}></Route>
    </Routes>
  );
}

export default App;
