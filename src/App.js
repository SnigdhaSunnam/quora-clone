import './App.css';
import Home from "./pages/home/home.jsx";
import Auth from "./pages/auth/auth.jsx";
import {Routes, Route} from "react-router-dom";
import Answer from './pages/answer/answer.jsx';
import Space from './pages/space/index.jsx';
import UserContextProvider from './contexts/user-context.jsx';
import GroupPage from './pages/space/groupPage.jsx';
import Following from './pages/following';
import Protected from './protected/index.jsx';
import Layout from './layout/index.jsx'
import Notification from './pages/notification/index.jsx';
import Search from './pages/Search/index.jsx';
import User from './pages/UserPage/index.jsx';

function App() {
  return (
    <UserContextProvider>
    <Routes>
    
      <Route path='auth' Component={Auth}></Route>
      <Route path='/' element={
              <Layout /> } >
            
      <Route path='home' Component={Home}></Route>
      <Route path='answer' Component={Answer}></Route>
      <Route path='space' Component={Space}></Route>
      <Route path='/group/:id' element={<GroupPage />} />
      <Route path='/following' element={<Following />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/search' element={<Search />} />
              <Route path='/user' element={<User />} />
      </Route>
              
    </Routes>
    </UserContextProvider>
  );
}

export default App;
