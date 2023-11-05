import { useState } from "react";

export default function Nav({ page, setPage }) {
  const [ham, setHam] = useState(false);

  function List({ screen, page, setPage }) {
    const pages = ["Home", "About", "Projects", "Contact Me"];

    return (
      <ul className={`${screen}Menu list`}>
        {pages.map((p) => (
          <li
            className={page === p ? "activeTab" : ""}
            onClick={() => setPage(p)}
          >
            {p}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav>
      <div className="name">
        <span>AKSHAT VYAS</span>
      </div>
      <List screen={"big"} page={page} setPage={setPage} />
      <div className="phone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="hamburger"
          onClick={() => setHam(!ham)}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        {ham && (
          <div className="menu">
            <List screen={"small"} page={page} setPage={setPage} />
          </div>
        )}
      </div>
    </nav>
  );
}
