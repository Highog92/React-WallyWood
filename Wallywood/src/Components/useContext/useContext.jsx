import { createContext, useState, useEffect } from "react";
export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    useEffect(() => {
        console.log("User has Changed - Yay", user)
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}

        </UserContext.Provider>
    )
}