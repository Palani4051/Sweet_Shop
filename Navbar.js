import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ cart ,Data}) => {
  console.log(Data)
  
  return (
   
<nav class="navbar navbar-light bg-light sticky-top">
  <a style={{fontSize:"30px"}} class="navbar-brand text-center" href="#">Sweet  <span style={{color:"orange",fontSize:"27px"}}>Haven</span></a>
  <ul class="nav justify-content-center dd">
    <li class="nav-item">
      <Link class="nav-link" to="/"><i class="fa fa-book" aria-hidden="true"></i> Menu</Link>
    </li>
    <li class="nav-item ">
      <Link class="nav-link"    to="/cart">
        <i class="fa fa-shopping-cart"></i> My Cart 
        <span>
          <span class="badge badge-danger bg-success ms-1 ms-0">{cart.length}</span>
        </span>
      </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/account">
        <i class="fa fa-user me-1" aria-hidden="true"></i> 
        {Data.name? Data.name : 'Account'}
      </Link>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;