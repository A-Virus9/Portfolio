import "../Styles/Projects.css";

const projects = [
  {
    name: "TIC-TAC-TOE",
    description: "Implementation of the Game Tic-Tac-Toe",
    tech_stack: "JS",
    link: "https://a-virus9.github.io/Vanilla-Web/Tic-Tac-Toe/index.html",
    github_link: "https://github.com/A-Virus9/Vanilla-Web/tree/main/Tic-Tac-Toe"
  },
  {
    name: "Calculator",
    description: "An ios calculator clone",
    tech_stack: "React.Js CSS",
    link: "https://calc-pi-ten.vercel.app/",
    github_link: "https://github.com/A-Virus9/Calculator"
  },
  {
    name: "Pixel Color App",
    description: "Simple pixel coloring app",
    tech_stack: "React.Js CSS",
    link: "https://pixel-color-app.vercel.app/",
    github_link: "https://github.com/A-Virus9/PIxelColorApp"
  },
  {
    name: "Linkedin Clone",
    description: "Clone of the login page of the social media platform LinkedIn",
    tech_stack: "CSS",
    link: "https://a-virus9.github.io/Vanilla-Web/LinkedIn%20clone/index.html",
    github_link: "https://github.com/A-Virus9/Vanilla-Web/tree/main/LinkedIn%20clone"
  },
  {
    name: "Portfolio",
    description: "My portfolio website, you are on this website :)",
    tech_stack: "React.Js CSS",
    link: "https://github.com/A-Virus9/Portfolio",
    github_link: "https://github.com/A-Virus9/Portfolio"
  },
  {
    name: "Nutrition Facts",
    description: "Nutrition label as seen in food packets cloned with CSS",
    tech_stack: "HTML CSS",
    link: "https://a-virus9.github.io/Vanilla-Web/Nutrition%20Facts/index.html",
    github_link: "https://github.com/A-Virus9/Vanilla-Web/tree/main/Nutrition%20Facts"
  },
  {
    name: "Online Shop",
    description: "Simple online grocery store",
    tech_stack: "CSS",
    link: "https://a-virus9.github.io/Vanilla-Web/Online%20shop/index.html",
    github_link: "https://github.com/A-Virus9/Vanilla-Web/tree/main/Online%20shop"
  },
];

function Project({project}) {
  return (
    <div className="project">
      <span className="project-name">{project.name.toLocaleUpperCase()}</span>
      <span className="project-description">{project.description}</span>
      <span className="project-tech-stack">{project.tech_stack}</span>
      <button className="open-project">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
        >
          Open Project
        </a>
      </button>
      <button className="open-github-repo">
        <a 
          href={project.github_link}
          target="_blank" 
          rel="noreferrer"
        >
          Github Repo&nbsp;
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl" width="2rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
        </a>
      </button>
    </div>
  );
}

export default function Projects() {

  return (
    <div id="project-tab-container">
      <span className="project-tab-header">
        ➤These are some of my projects:-
      </span>
      <div className="projects-container">
        {projects.map((project) => (
          <Project project={project}/>
        ))}
      </div>
    </div>
  );
}
