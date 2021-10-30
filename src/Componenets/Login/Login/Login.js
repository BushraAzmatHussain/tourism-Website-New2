import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from ', location.state?.from);

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })

    }
    
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-dark fw-bold">Google Sign In</button>
        </div>
    );
};

export default Login;