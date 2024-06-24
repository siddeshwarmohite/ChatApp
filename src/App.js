import logo from './logo.svg';
import React,{lazy} from 'react';
import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Login =lazy(()=> import('./pages/Login'))
const Chat =lazy(()=> import('./pages/Chat'))
const Groups =lazy(()=> import('./pages/Groups'))

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/" element ={<Home />} />,
      <Route exact path ="chat/:username" element ={<Chat/>} />,
      <Route exact path ="login" element ={<Login/>} />,
      <Route exact path ="groups" element ={<Groups />} />,





    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
