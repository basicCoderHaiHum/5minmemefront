import './App.css';
import Login from "./Comp/Login";
import Signup from "./Comp/Signup";
import Home from "./Comp/Home";
import Profile from "./Comp/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from"react-router-dom";
// https://api.imgflip.com/get_memes
import { useEffect, useState } from 'react';
import Construction from './Comp/Construction';
function App() {
  const [logged, updateLog] = useState(false);
  useEffect(() => {
    setInterval(() => {
    updateLog(localStorage.getItem("logged") ? true : false);
    }, 100);
  }, [1]);
  return (
      <>
          <Router>
              <Routes>
            <Route path="/" element={logged?<Navigate to="/home" />:<Login />} />
            <Route path="/signUp" element={logged?<Navigate to="/home" />:<Signup />} />
            <Route path="/home" element={logged?<Home />:<Navigate to="/signUp" />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/create" element={<Profile />} />
            <Route path="/search" element={<Profile />} />
            </Routes>
          </Router>
      </>
  );
}

export default App;
