import { useEffect, useState } from "react";
import "./App.css";
import "./Phone.css";
import Home from "./Home"
import Nav from "./Nav"
import Contact from "./Contact"
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
      {page === "Contact Me" && <Contact />}
    </div>
  );
}