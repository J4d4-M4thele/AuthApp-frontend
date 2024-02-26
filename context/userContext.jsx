import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({});

export function UserContextProvider({children}) {
    const [User, setUser] = useState(null);
    useEffect(() => {
        if(!User) {
            axios.get('/profile')
            .then(({data}) => {
                setUser(data)
            })
        }
    }, [])
    return (
        <userContext.Provider value={User}>
            {children}
        </userContext.Provider>
    )
}