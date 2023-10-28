import { useState } from "react";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <img src="Akshat.png" alt="Error" />
      <div className="home-info">
        <div className="home-hi">Hi! I am Akshat Vyas...</div>
        <div className="home-brief">
          -I am a Web Developer Currently Pursuing B.Tech in Computer Science at
          Kalinga Institute of Industrial Technology (KIIT) and I am always
          willing to learn new things.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const handlePage = (e) => {
    setPage((page) => page === e ? page : e);
  };

  function Nav() {
    return (
      <nav>
        <div className="name">
          <img src="Square.svg" alt="" />
          <span>AKSHAT VYAS</span>
        </div>
        <ul>
          <li onClick={() => handlePage("home")}>Home</li>
          <li onClick={() => handlePage("about")}>About Me</li>
          <li onClick={() => handlePage("contact")}>Contact Me</li>
          <li onClick={() => handlePage("qualifications")}>Qualifications</li>
        </ul>
        <img src="bars-solid.svg" alt="error" className="hamburger" />
      </nav>
    );
  }

  return (
    <div className="Container">
      <Nav />
      {page === "home" && <Home />}
    </div>
  );
}
