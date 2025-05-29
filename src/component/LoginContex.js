import { createContext, useState } from "react"

export const adminContext = createContext();
export default function ContextProvider({ children }) {


    const [login, setLogin] = useState(false);


    return (
        <adminContext.Provider value={{ setLogin, login }}>
            {children}
        </adminContext.Provider>
    )

}