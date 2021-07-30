import React, {createContext, useState} from 'react'

export const AuthContext  = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const authContextData = {
        isAuth,
        toggleAuth
    }

    return (
        <AuthContext.Provider value={authContextData}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider