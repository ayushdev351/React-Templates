import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Menu from "./Components/Menu";

import { useState, createContext } from "react";

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [userName, setUserName] = useState("Ayush");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <div className="App" id = {theme}>
      <Router>
        <Navbar />
        {/* Wrap all the components where you want to use the value of the context
        with the provider of the context */}
        <UserContext.Provider value={{ userName, setUserName }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
