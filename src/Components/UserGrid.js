import React , {useState,useEffect}from 'react';
import '../assets/css/Usergrid.css';
import axios from 'axios';

const UserGrid = () => {
const [data, setData] = useState("");
const apiUrl = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
    };
    fetchData();
  }, []);

  function logOut() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  }
  const peopleList = () => {
    let pageList = [];
    for (let i = 0; i < data.page; i++) {
      pageList.push(<span className="paginationFirst">{i}</span>
      );
    }
    return pageList;
  }
  return (
    <div style={{height: "calc(100vh)", backgroundColor:"#fff"}}>
      <div style={{clear: "both",float: "left","z-index":1111111}} >
      </div>
      <div style={{float:"right",marginRight:"20px",marginTop:"10px"}} onClick={() => logOut()}>Logout</div>

    <div className="userGrid">
          <div className="title">
              <p> <span><i class="fa  fa-file" style={{boxShadow:"0 0 5px grey",fontSize:"30px" ,color:"purple"}}>
              </i> &nbsp;  Users list </span></p>
          </div>
        <ul>
          <li><span><i class="fa  fa-caret-up"></i>Id</span></li>
          <li><span><i class="fa fa-caret-up"></i> First Name</span></li>
          <li><span><i class="fa fa-caret-down"></i>Last Name</span></li>
          <li><span><i class="fa fa-caret-down"></i> Email</span></li>
          <li> <span><i class="fa fa-caret-down"></i>Avator</span></li>
          <li><span><i class="fa fa-caret-down"></i>Action</span></li>
        </ul>
        <ul className="userGrid">
        {data && data.data.map(item => (
          <>
           <li > {item.id}</li>
           <li > {item.first_name}</li>
           <li > {item.last_name}</li>
           <li width="134px" >{item.email}</li>
           <li> 
              <img src={item.avatar} alt="img" width="15px" style={{borderRadius:"20px"}}/> 
          </li>          
          <li className="pointerShow"> 
                <span className="mgl10"><i class="fa fa-heart" style={{color:"#4eb4d6",fontSize:"15px"}}></i></span>
                <span className="mgl10"><i class="fa fa-film"  style={{color:"orange",fontSize:"15px"}}></i></span>
                <span className="mgl10 pointerShow"><i class="fa fa-times" style={{color:"red",fontSize:"15px"}}></i></span>
              </li>  
           </>
        ))}
                 
        </ul>
        <ul className="userGrid mgt10">
          <li className="boldText">Name</li>
          <li className="boldText"> Position</li>
          <li className="boldText">Office</li>
          <li className="boldText">Age</li>
          <li className="boldText"> Date</li>
          <li className="boldText">Action</li>
        </ul>
        <div className="userGrid" style={{"padding":"20px 0px 0px 0px"}}>
          <div style={{float:"left" ,marginLeft: "50px"}}>Showing {data.per_page} to {data.length} of {data.total} entries</div>
          <div  className="tablePagination">
                <span>FIRST</span>
                <span>PREVIOUS</span>
                {peopleList()}
                <span>NEXT</span>
                <span>LAST</span>
          </div>
        </div>
    </div>
    </div>
  );
};

export default UserGrid;
