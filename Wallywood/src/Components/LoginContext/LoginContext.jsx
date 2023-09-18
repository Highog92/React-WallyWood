
// Dette bliver brugt til 

import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext(null)

export const LoginContextProvider = ({ children }) => {

    const [user, setUser] = useState()
    // useEffect(() => {
    //     console.log("User has Changed - Yay", user)
    // })

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}