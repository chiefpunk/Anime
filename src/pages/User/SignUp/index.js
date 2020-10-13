import React from 'react'
import Breadcrumb from 'components/Breadcrumb';
import RegisterContainer from "containers/Register";
export default function SignUp(props) {
    console.log('signin')
    
    return (
        <>
            <Breadcrumb title="Sign Up" description = "Welcome to the official Anime blog."/>
            <RegisterContainer />
        </>
    )
}
