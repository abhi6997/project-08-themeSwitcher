import { createContext, useContext } from "react";

// const themeContext = react.createContext()

export const  themeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}

})

export const ThemeContextProvider = themeContext.Provider


export default function useTheme(){
    return useContext(themeContext)
}

