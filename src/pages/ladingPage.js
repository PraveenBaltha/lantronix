import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Login from '../Components/Login';
const LandingPage = (props) => {
    const {pathname} = props && props.location;
    const renderPage = ()=>{
        if(pathname === '/login'){
            return <Login {...props}/>
        }else if(pathname === '/signup'){
            return <Login {...props}/>
        }
    }
    return (
    <div>
        <div style={{clear: "both",float: "left",width:"100%"}}>
            <Header/>
        </div>
        <div>
        {renderPage()}
        </div>
        <div style={{width:"100%", float:"right"}}>
            <Footer/>
        </div>
    </div>
        );
    };
export default LandingPage;