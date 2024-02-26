import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import { userContextProvider } from '../context/userContext';

function App() {

  return (
    <userContextProvider>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2800}}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </userContextProvider>
  )
}

export default App
