import React from 'react'
import Breadcrumb from 'components/Breadcrumb';
import LoginContainer from 'containers/Login';
export default function SignIn(props) {
    console.log('signin')
    
    return (
        <>
            <Breadcrumb title="Sign In" description = "Welcome to the official Anime blog."/>
            <LoginContainer />
        </>
    )
}
