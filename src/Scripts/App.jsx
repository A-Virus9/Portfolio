import { useEffect, useState } from "react";
import "../Styles/Nav.css"
import "../Styles/App.css";
import "../Styles/Phone.css";
import Home from "./Home"
import Nav from "./Nav"
import About from "./About"
import Projects from "./Projects" 

export default function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `Akshat Vyas - ${page}`;
  }, [page]);

  return (
    <div className="container">
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "About"  && <About />}
      {page === "Projects" && <Projects />}
    </div>
  );
}