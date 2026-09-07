import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'
import '../../../style/autoLoading.scss'

const AuthLoadingScreen = () => (
    <main className='auth-loading'>
        <div className='auth-loading__spinner' />
    </main>
)

const Protected = ({children}) => {
    const {loading,user} = useAuth()

    if (loading) {
        return <AuthLoadingScreen />
    }

    if(!user){
       return <Navigate to={'/login'}/>
    }

    return children
}

export default Protected
