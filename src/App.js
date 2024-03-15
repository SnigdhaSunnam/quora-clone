import './App.css';
import Home from "./pages/home/home.jsx";
import Auth from "./pages/auth/auth.jsx";
import {Routes, Route} from "react-router-dom";
import Answer from './pages/answer/answer.jsx';
import Space from './pages/space/index.jsx';
import UserContextProvider from './contexts/user-context.jsx';
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='' Component={Home}></Route>
      <Route path='auth' Component={Auth}></Route>
      <Route path='answer' Component={Answer}></Route>
      <Route path='space' Component={Space}></Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
