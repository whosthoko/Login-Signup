import {Routes, Route,} from 'react-router-dom';
import './App.css';
import {React,}  from 'react';

//Multimedia
import Logo from '../src/assets/multimedia/Logo.png'

//Components

//Pages
import Profile from './pages/Profile'
import Login from './pages/Login';
import Signup from './pages/Signup'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ='/Login' element={<Login />} />
      <Route path ='/Signup' element={<Signup />} />
      <Route path ='/Profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;