import React, { createContext, useState , ReactNode} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

interface CurrentUserContextType {
    authTokens: string | null;
    setAuthTokens:React.Dispatch<React.SetStateAction<string | null>>;
    user: string | null;
    setUser:React.Dispatch<React.SetStateAction<string | null>>;
    loading: boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<CurrentUserContextType>({} as CurrentUserContextType)


const AuthProvider = ({ children }:{children:React.ReactNode}) => {
    let [authTokens, setAuthTokens] = useState<string | null>(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens') || "") : null)
    let [user, setUser] = useState<string | null>(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens') || "") : null)
    let [loading, setLoading] = useState<boolean>(false)

    // call logout

    // function callLogout() {
    //     setAuthTokens(null)
    //     setUser(null)
    //     localStorage.removeItem('authTokens')
    // }
    // Updating refresh token


    // updating refresh token after revisit and access token expire time

    return (
        <AuthContext.Provider value={{ user, setAuthTokens, setUser, authTokens, setLoading, loading}}>
            {loading ? children : null }
        </AuthContext.Provider>
    )
}

export default AuthProvider;