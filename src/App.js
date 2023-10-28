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

function Home(){
  return (
    <div className="home">
      <img src="Akshat.png" alt="Error" />
      <div className="home-info">
        yo
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
