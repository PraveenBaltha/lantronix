import React, { useState} from 'react';
import '../assets/css/Landing.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory} from 'react-router-dom';  


const Login = (props) => {
const history = useHistory();
const {pathname} = props && props.location;
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [status, setStatus] = useState(false);
const apiUrl = (pathname === '/login') ? "https://reqres.in/api/login" : "https://reqres.in/api/register";
const { register, handleSubmit,errors } = useForm();
const getTitle = (pathname === '/login') ? "Login" : "SignUp";

async function  onSubmit() {
   try {
     await axios.post(apiUrl,{ "email":email,password:password});
     setStatus(true);
     navigateLocation(status);
   } catch (event) {
     localStorage.setItem("isLoggedIn",false);
     alert(event.message);
   }
 }
 function navigateLocation(){
   if(pathname === '/login'){
      localStorage.setItem("isLoggedIn",true);
      history.replace('/dashboard');
   }else if(pathname==='/signup'){
      history.replace('/login');
   }
 }
return (
<div style={{ top: '150px', textAlign: 'center', width: '30%', margin: 'auto', background: 'white', borderRadius:'8px', padding: '20px', position: 'relative' }}>
<div style={{ background: '#e23371', boxShadow: '0px 0px 5px grey', padding: '20px', width: '90%', margin: 'auto', borderRadius: '10px', marginTop: '-50px', color: '#fff' }}>
<h4>{getTitle}</h4>
<div className="socialContainer">
   <i class="fa fa-facebook-square" aria-hidden="true"></i>
   <i class="fa fa-twitter-square" aria-hidden="true"></i>
   <i class="fa fa-google-plus" aria-hidden="true"></i>
</div>
</div>
<span>or be classical</span>
<form onSubmit={handleSubmit(onSubmit)}>
   <div className="formContainer">
      <div>
         <i class="fa fa-user"></i>
         <input type="text" name="name" placeholder="First Name" 
            value={name} onChange={e => setName(e.target.value)}
         ref={register({
         required: 'Required',
         })}
         />
      </div>
      <div>
         {errors.name && errors.name.message}
      </div>
      <div>
         <i class="fa fa-envelope"></i>
         <input type="text" name="email" placeholder="Email Address"  value={email} 
            onChange={e => setEmail(e.target.value)}
         ref={register({
         required: 'Required',
         pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
         message: "invalid email address"
         }
         })}
         />
      </div>
      <div>
         {errors.email && 'Email is required.'}
      </div>
      <div>
         <i class="fa fa-lock"></i>
         <input type="password" name="password" placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
         ref={register({
         required: 'Required',
         pattern: {
         value: /^(?=.{6,})/i	,
         message: "The string must be 6 characters"
         }
         })}
         />
         <div>
            {errors.password && 'The string must be 6 characters'}
         </div>
      </div>
      <button  type="submit">LET'S GO</button>
   </div>
</form>
</div>
);
};
export default Login;