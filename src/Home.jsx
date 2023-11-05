import profile from "./Data/Akshat-Vyas-Resume.pdf";
import Akshat from "./Data/Akshat.png"
import "./Home.css"

export default function Home() {
    return (
      <section className="home">
        <img src={Akshat} alt="Poster" />
        <div className="home-info">
          <div className="home-hi">Hi! I am Akshat Vyas...</div>
          <div className="home-brief">
            -I am a Web Developer Currently Pursuing B.Tech in Computer Science at
            Kalinga Institute of Industrial Technology (KIIT) and I am always
            willing to learn new things.
          </div>
          <a href={profile} download="Akshat-Vyas-Resume" id="resumeA">
            <button className="resume">Download Resume</button>
          </a>
        </div>
      </section>
    );
  }