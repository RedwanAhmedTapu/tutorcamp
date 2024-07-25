import {useState,useEffect} from 'react';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkLightMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

  
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        applyDarkMode();
      }
      
    }, []);
  
    //  apply dark mode
    const applyDarkMode = () => {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    };
  
    //  apply light mode
    const applyLightMode = () => {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    };
  return (
    <>
     <div className={`w-24 h-12   bg-slate-50 flex items-center rounded-xl dark:bg-[#0b0925]   relative `}>
            {isDarkMode ? (
              <div className="w-8 h-8 absolute transition-all duration-500  translate-x-16 text-white flex_center gap-x-1 cursor-pointer">
                <LightModeIcon
                  className="w-8 h-8   dark:text-yellow-200"
                  onClick={() => {
                    applyLightMode();
                  }}
                />
              </div>
            ) : (
              <div className="w-8 h-8 absolute transition-all duration-500  translate-x-1 text-white flex_center gap-x-1 cursor-pointer">
                <DarkModeIcon
                  className="w-8 h-8 text-slate-500 "
                  // checked={isDarkMode}
                  onClick={() => {
                    applyDarkMode();
                  }}
                />
              </div>
            )}
          </div>
    </>
  )
}

export default DarkLightMode