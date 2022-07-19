import React,{useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {auth} from './firebase'


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);


/*
    wrap all child comp. in the provider, 
    and pass {user} as prop to childs,
    useEffect() once they change the user.

*/

export const AuthProvider = ({children}) =>{
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const history = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if(user)history('/');
        })
    },[user])

    const value = {user};
    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}

