import { useState } from "react";
import "./App.css";
import "./Phone.css";

function Home() {
  return (
    <div className="home">
      <img src="Akshat.png" alt="Poster" />
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
  const [ham, setHam] = useState(false);

  const handlePage = (e) => {
    setPage((page) => page === e ? page : e);
  };

  const handleHam = () => {
    setHam(!ham);
  };

  function List({ screen }) {
    return (
      <ul className={`${screen}Menu list`}>
        <li onClick={() => handlePage("home")}>Home</li>
        <li onClick={() => handlePage("about")}>About Me</li>
        <li onClick={() => handlePage("contact")}>Contact Me</li>
        <li onClick={() => handlePage("qualifications")}>Qualifications</li>
      </ul>
    );
  }

  function Nav() {
    return (
      <nav>
        <div className="name">
          <img src="Square.svg" alt="Icon" />
          <span>AKSHAT VYAS</span>
        </div>
        <List screen={"big"} />
        <div className="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="hamburger"
            onClick={() => handleHam()}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          {ham && (
            <div className="menu">
              <List screen={"small"} />
            </div>
          )}
        </div>
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
