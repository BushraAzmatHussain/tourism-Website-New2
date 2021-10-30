import React from 'react';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-dark fw-bold">Google Sign In</button>
        </div>
    );
};

export default Login;