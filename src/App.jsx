import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import   {ThemeContextProvider} from "./Context/Theme/theme.js";
import useTheme from "./Context/Theme/theme.js";

import ThemeBtn from "./components/ThemeButton/ThemeBtn.jsx";
import Card from "./components/Card/Card.jsx";

function App() {

  const [themeMode, setThemeMode] = useState("light")
  const  lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{

    const elem = document.querySelector('html');

   elem.classList.remove("light","dark")
   elem.classList.add(themeMode)},[themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode, darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center mx-auto ">
        <div className="w-full ">
          <div className=" max-w-sm mx-auto flex justify-end mb-4 p-4">
            {/* theme button */}
           <ThemeBtn/>
          

          </div>
          {/* card */}
          <Card/>
          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App;
