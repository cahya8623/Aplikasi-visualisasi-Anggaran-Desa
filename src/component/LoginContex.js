import { createContext, useState } from "react"


export const adminContext = createContext();
export default function ContextProvider({ children }) {


    const [login, setLogin] = useState(false);
    const [Data, setData] = useState([]);
    const [Submit, setSubmit] = useState(false);





    return (
        <adminContext.Provider value={{ setLogin, login, setData, Data, setSubmit, Submit }}>
            {children}
        </adminContext.Provider>
    )

}