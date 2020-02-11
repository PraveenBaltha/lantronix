import React from 'react'; 
import { Route , Redirect} from 'react-router-dom';

const AuthenticatedRoute = ({component:Component, ...rest}) => (
    <Route {...rest}
    render = { props =>
        localStorage.getItem("isLoggedIn") ? (<Component {...props}/>) : 
        (<Redirect to={{
                pathname:"/login",
                state: {from: props.location}
                }}
        />
        )
    }
    />
)

export default AuthenticatedRoute