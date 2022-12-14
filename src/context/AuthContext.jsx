import React, { createContext, useState } from 'react'


//AuthContext yapısı oluşturduk
export const AuthContext=createContext()


const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Password: "",
    Email: "",
    PhoneNumber: "",
    City: "",
    login:false
  });


 const values={user,setUser}

  return (
    <AuthContext.Provider value={values} >
{children}

    </AuthContext.Provider>
  )
}

export default AuthProvider