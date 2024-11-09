import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';
import Account from './components/Account';



function App() {
  const[cart,setcart]=useState([])
  const[Data,setData]=useState([])
  return (
   <>

   <BrowserRouter>

   <Navbar cart={cart} Data={Data} setData={setData} />
   <Routes>
    <Route  path='/' element={<Home cart={cart}  setcart={setcart}/>} />
    <Route  path='/account' element={<Account cart={cart}  setcart={setcart}    Data={Data} setData={setData}/>} />
    <Route  path='/cart' element={<Cart cart={cart}  setcart={setcart}   Data={Data} setData={setData}  />} />
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
