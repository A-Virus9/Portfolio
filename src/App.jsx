import { useEffect, useState } from "react";
import "./App.css";
import "./Phone.css";
import profile from "./Akshat-Vyas-Resume.pdf";
import Home from "./Home"
import Nav from "./Nav"
import Contact from "./Contact"

export default function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `Akshat Vyas - ${page}`;
  }, [page]);

  return (
    <div className="container">
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <Home profile={profile} />}
      {page === "Contact Me" && <Contact />}
    </div>
  );
}
