import {useContext} from "react";
import {ThemeContext} from "../App"

function ThemeToggler() {
    
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button className="btn" onClick={toggleTheme}>Change to {theme == "light"? "dark" : "light"}</button>
    )
}

export default ThemeToggler