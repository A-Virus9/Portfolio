import "./App.css";

function Nav() {
  return (
    <nav>
      <div className="name">
        <img src="Square.svg" alt="" />
        <span>AKSHAT VYAS</span>
      </div>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Contact Me</li>
        <li>Qualifications</li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="home">
      <img src="Akshat.png" alt="Error" />
      <div className="home-info">
        <div className="home-hi">Hi! I am Akshat Vyas...</div>
        <div className="home-brief">
          -I am a Web Developer Currently Pursuing B.Tech in Computer Science at
          Kalinga Institute of Industrial Technology (KIIT) and I am always willing to learn new things.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="Container">
      <Nav />
      <Home />
    </div>
  );
}
