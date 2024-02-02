import { createContext,  useState } from "react";
export const UserContext = createContext(); 

export default function UserContextProvider({children}) {
    const [text, setText] = useState([]);
    return <UserContext.Provider value={{text, setText }} >
            {children}
        </UserContext.Provider>
}
 