import { createContext, useState } from "react"

export const adminContext = createContext();
export default function ContextProvider({ children }) {
    // const [user, setUser] = useState(false)
    const [Auth, setAuth] = useState({});
    const [login, setLogin] = useState(false);
    // console.info("console log di context" + submit)

    return (
        <adminContext.Provider value={{ Auth, setAuth, setLogin, login }}>
            {children}
        </adminContext.Provider>
    )

}