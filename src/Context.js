import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
    const [username, setUsername] = useState("test")
    const [password, setPassword] = useState("12345")
    
    return (
        <Context.Provider value={{username, password}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

