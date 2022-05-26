import React, {useState, useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const changeSize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', changeSize);
        return () => {
        window.removeEventListener('resize', changeSize);
        }
    })

    return (
        <AppContext.Provider value={{
            windowSize,
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}