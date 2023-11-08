import profile from "../Data/Akshat-Vyas-Resume.pdf";
import Akshat from "../Data/Akshat.png"
import "../Styles/Home.css"

function Contact() {
  const platforms = [
    {
      platform: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="contact-icons"
        >
          <path
            d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z"
            fill="#0077b5"
          ></path>
        </svg>
      ),
      link: "https://www.linkedin.com/in/akshat-vyas-747819278/",
    },
    {
      platform: "Github",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="contact-icons"
        >
          <path
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            fill="#000000"
            stroke="white"
          ></path>
        </svg>
      ),
      link: "https://github.com/A-Virus9",
    },
    {
      platform: "vyasakshat123@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 141.7 141.7"
          viewBox="0 0 141.7 141.7"
          className="contact-icons gmail"
        >
          <path
            fill="#4285f4"
            d="M24.3,111.3h17.2V69.6L16.9,51.3V104C16.9,108,20.2,111.3,24.3,111.3z"
          ></path>
          <path
            fill="#34a853"
            d="M100.3,111.3h17.2c4.1,0,7.4-3.3,7.4-7.4V51.3l-24.5,18.4V111.3z"
          ></path>
          <path
            fill="#fbbc04"
            d="M100.3,37.8v31.9l24.5-18.4v-9.8c0-9.1-10.4-14.3-17.7-8.8L100.3,37.8z"
          ></path>
          <path
            fill="#ea4335"
            fill-rule="evenodd"
            d="M41.4,69.6V37.8l29.4,22.1l29.4-22.1v31.9L70.9,91.7L41.4,69.6z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#c5221f"
            d="M16.9,41.4v9.8l24.5,18.4V37.8l-6.9-5.2C27.3,27.2,16.9,32.4,16.9,41.4z"
          ></path>
        </svg>
      ),
      link: "",
    },
    {
      platform: "+916370829672",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="contact-icons"
        >
          <path
            fill="#428bff"
            d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"
          ></path>
        </svg>
      ),
      link: "",
    },
  ];

  return (
    <div className="contact">
      {platforms.map((platform) => (
        <a
          href={platform.link}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="link-icon">{platform.icon}&nbsp;</span>
          <span className="link-text">{platform.platform}</span>
        </a>
      ))}
    </div>
  );
}


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
            <button className="resume">Download CV</button>
          </a>
        </div>
        <Contact />
      </section>
    );
  }