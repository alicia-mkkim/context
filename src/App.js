import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./components/Page";
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}
export default App;
