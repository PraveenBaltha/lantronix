import React from 'react';
import '../assets/css/LeftSideBar.css';
import logo from '../assets/images/img.jpg'; // with import


const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
    <div className="container">
        <div>
          <ul>
            <li>BT BRAND NAME</li>
            <li style={{borderTop: '1px solid #484646', borderBottom: '1px solid #484646'}}> <img width="25px" src={logo} height="25px" style={{borderRadius:"20px",marginTop:"10px"}}/> 
                <span style={{ position: 'relative', top: '-7px', left: '10px'}}> Name <i class="fa fa-caret-down"></i></span>          
              </li>
            <li> <a><span><i className="fa fa-dashboard"></i> &nbsp;Dash Board</span></a></li>
            <li> <a><span><i className="fa fa-dashboard"></i> &nbsp;Charts</span></a></li>
            <li> <a><span><i className="fa fa-dashboard"></i> &nbsp;Calendar</span></a></li>

          </ul>
        </div>
    </div>
    </div>
  );
};

export default LeftSideBar;
