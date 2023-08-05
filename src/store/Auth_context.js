import React,{useState,useEffect} from 'react'

const Auth_context=React.createContext({
    isLoggedIn:false,
    isLoggedOut:()=>{},
    onLogin:(email,password)=>{}
});
export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    useEffect(()=>{  

        const loggedinstatus=localStorage.getItem('isLoggedIn');
      if(loggedinstatus==='1')
      {
        setIsLoggedIn(true);
      }
      
      },[])
    const logoutHandler=()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);

    }
    const loginHandler=()=>{

           localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true);
    }
    return (
    <Auth_context.Provider value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler,
        onLogin:loginHandler
    }}>{props.children}</Auth_context.Provider>)
}
export default Auth_context;