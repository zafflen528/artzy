import React, { useState,useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import LoginForm from './components/LoginForm';

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return isLoading ? (
        <SplashScreen />
    ) : (
        <>
            <div>Login</div>
            <LoginForm />
        </>
    );
};

export default Login;