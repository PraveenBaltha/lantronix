import React from 'react';
import '../App.css';
import {
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">BRAND NAME</div>
      <div className="loginRegister">
        <span><i className="fa fa-user"></i><Link to='/signup'>Register</Link></span>
        <span><i className="fa fa-user"></i><Link to='/login'>Login</Link></span>
      </div>
    </div>
  );
};

export default Header;
