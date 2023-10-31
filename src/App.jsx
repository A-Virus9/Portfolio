import { useEffect, useState } from "react";
import "./App.css";
import "./Phone.css";
import profile from "./Akshat-Vyas-Resume.pdf";

function Nav({ page, setPage }) {
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

function Home() {
  return (
    <section className="home">
      <img src="Akshat.png" alt="Poster" />
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

function Contact() {
  return (
    <div className="contact">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
      similique facere reiciendis saepe, officia illum ducimus sint earum at
      tenetur reprehenderit. Perspiciatis incidunt alias porro quod voluptas
      cupiditate maiores explicabo nam amet nemo delectus officia, nulla
      pariatur odit cum repellendus quasi harum voluptatibus commodi maxime.
      Dignissimos quia eaque, quidem ea corporis blanditiis quas quod doloribus
      itaque maiores nulla? Necessitatibus incidunt praesentium dolore? Autem
      cupiditate magni neque eligendi nobis illum incidunt error iusto optio
      facilis esse aliquam, iste temporibus reprehenderit commodi! Neque a qui,
      atque excepturi perspiciatis optio quam, dolorum, error incidunt
      reiciendis explicabo. Voluptatem sed, voluptate sunt facere odio earum
      incidunt. Assumenda consequatur doloribus dolorem ea atque asperiores quam
      ex, voluptatem aliquam quos a fugiat dolorum voluptate cum neque
      accusantium, numquam explicabo, at ipsam beatae similique error harum
      perspiciatis minus! Enim, laudantium. Ea quisquam id aliquam delectus eum
      consectetur quidem? At repudiandae omnis nobis sit tempore eveniet et
      maxime eos quae, illo, dolorum iste quaerat nam quia maiores molestias
      facilis possimus laboriosam itaque, rem tenetur soluta? Molestias
      blanditiis quod nam eum voluptatem dolor a maiores, laboriosam quas
      voluptate aperiam et delectus quaerat doloribus quis consequuntur, velit
      autem maxime deserunt repellendus mollitia. Provident, perspiciatis
      consequatur. Ducimus aspernatur at recusandae possimus quasi eligendi,
      modi atque impedit fuga pariatur, minus sapiente voluptatum illo ut nihil
      praesentium ad provident repellendus? Consectetur a eligendi cum animi
      odio magni quasi id omnis libero, rerum impedit ipsam saepe et magnam quas
      reprehenderit reiciendis ipsa numquam voluptates repellat excepturi
      voluptatum? Enim quidem est modi. Rerum debitis harum incidunt laboriosam
      a, voluptatem ex facilis quibusdam vel eos, ullam nemo fuga unde ad! Ad
      odit perspiciatis itaque aliquam, ea veniam? Ab id officia ipsam harum
      ipsum. Doloremque necessitatibus voluptatem quis dolorem mollitia atque
      eveniet corporis deleniti, quod impedit tempora quibusdam tenetur
      voluptate recusandae delectus eos aut laudantium. Est modi aut autem
      voluptates molestias, blanditiis vero, sapiente tenetur itaque repellendus
      debitis officiis quam officia! Placeat, molestias repudiandae a eos
      laborum pariatur quo delectus quam, veniam ipsa nihil possimus ipsam
      dolorem veritatis quod corporis. Perspiciatis nobis accusantium,
      consequuntur maiores sint facilis tempore, pariatur fugiat corporis eos
      qui. Quisquam dolore beatae accusamus suscipit delectus amet facilis ut
      quidem iusto ab fuga officiis, voluptatem in modi mollitia assumenda iste,
      error ullam accusantium, blanditiis adipisci. Perspiciatis cumque quos
      quasi quod nisi ex recusandae neque ea sunt? Harum aliquam minus iure
      sint! Corrupti officiis itaque molestiae repudiandae! Asperiores, veniam
      nulla cupiditate esse sit adipisci aliquid, hic assumenda tempora dolore
      soluta. Minima quia minus, facere quo ducimus repellendus, illum, sint
      commodi dolor aperiam rerum cupiditate numquam non aliquid corporis. Quis
      nesciunt maiores possimus nostrum impedit quam corporis fugit, placeat
      ipsum asperiores vero animi tenetur consectetur doloribus eius aperiam,
      soluta eos similique neque. Iste dolorem ullam provident hic, libero qui
      beatae odit adipisci! Dolor atque enim iusto labore ullam. Illum ea fugit
      sapiente harum consequatur, optio, et id unde ipsa nesciunt tempore
      maiores, exercitationem molestias aliquam tenetur praesentium omnis! Quos,
      neque eveniet. Itaque inventore blanditiis quis incidunt eveniet laborum
      praesentium fuga eos quo id tempore, dolore dicta minus totam, ut vitae
      magni labore autem nihil quas. Vitae libero facilis expedita tenetur
      dolorum? Placeat error saepe eveniet atque magnam, asperiores aliquam,
      iste cum nesciunt architecto, provident excepturi beatae corporis ex
      consequuntur dolorum? Aliquid error magni fugiat quam nihil esse eum rem
      explicabo vero eaque quaerat nobis iure quo inventore velit, ipsum
      consequatur dicta nam quia officiis a ad. Veniam doloremque suscipit
      quaerat eum quod ducimus accusamus hic. Rem quibusdam quas, accusamus
      tempora cupiditate dolorum dolor iusto sit consequuntur suscipit omnis
      repellendus pariatur porro. Odio iusto doloremque odit ad! Adipisci iusto,
      amet natus temporibus soluta numquam, enim qui maiores illo commodi quo
      maxime aspernatur libero beatae ea dignissimos. Earum voluptatum labore
      voluptatibus ipsam harum ut ea in veritatis! Consequuntur autem repellat
      voluptatem odit accusantium reprehenderit quo tenetur tempore veniam
      incidunt ea inventore harum rerum eligendi laborum ex nobis ab
      repudiandae, magnam doloremque labore ipsum cum! Aut doloribus facilis
      debitis laborum suscipit? Debitis voluptatibus tempore doloribus
      recusandae pariatur sint? Exercitationem aliquam, mollitia porro
      temporibus harum iure asperiores enim nesciunt, autem, est iusto! Itaque
      rerum praesentium possimus porro ipsam neque expedita officiis, quo enim
      iste dolor quia veniam ea ullam, incidunt, inventore perspiciatis vitae
      fugiat voluptatem quae id vel! Delectus, blanditiis quod dolorem quo
      minima corrupti asperiores eveniet! Incidunt omnis perspiciatis est quo
      earum corporis nostrum ullam veniam tenetur animi, assumenda reprehenderit
      cum illum, esse quis delectus, eius ad debitis tempora praesentium
      corrupti dolore nam? Magni placeat dolorem laudantium sequi tenetur,
      facere enim unde dolore labore asperiores iure nam provident? Quae soluta
      rem eum, dolorum omnis labore nam repudiandae laudantium maiores
      molestias, aperiam explicabo incidunt aliquid? Excepturi hic obcaecati
      rerum soluta. Dolor quam tempora accusantium fuga perspiciatis repellat
      asperiores impedit quod maxime suscipit, nam numquam rerum quis voluptate
      provident maiores temporibus atque? Quas qui, eos, numquam provident dolor
      corporis aut dolore atque ea odit voluptate impedit nisi natus explicabo
      quidem minus quae iure iste suscipit unde nemo aperiam eveniet distinctio
      dignissimos! Sapiente dolorem similique accusantium ratione magnam
      expedita quos veniam blanditiis voluptates animi itaque soluta quisquam,
      officia alias impedit rem? Tempore possimus consequuntur porro vero modi
      cupiditate dolor laudantium enim aliquid veniam, velit voluptatibus iure
      veritatis? Magnam deleniti ducimus odio fugiat accusantium blanditiis
      velit placeat vitae nisi, itaque, officia accusamus explicabo aspernatur
      cum adipisci, fugit sed beatae pariatur ut ad alias dolore magni! Fugit,
      dolore dolorem magnam temporibus nihil pariatur, inventore unde vero harum
      ratione facilis, et cumque minus sit tempora aliquid culpa accusamus
      quisquam esse animi ex quibusdam ipsa. Excepturi odit velit illo eos
      temporibus! Sequi voluptatibus excepturi eius eligendi dolor aperiam
      debitis, totam, iste rerum fuga accusantium, similique reprehenderit
      repudiandae perferendis. Similique inventore velit voluptate? Iure ex
      rerum officiis a impedit voluptates fugiat reprehenderit, excepturi aut!
      Magnam minus quasi quidem eveniet deserunt dolorem eius fugiat totam quos
      consequuntur ratione, dolores quae quisquam? Ratione quis dolore, dolores
      amet quas laudantium quidem laboriosam similique autem animi inventore
      excepturi corporis illo hic iste voluptas aliquid nesciunt, corrupti nemo
      sit dolorem! Voluptatem illum eos minus reprehenderit odit saepe
      repellendus aliquam fuga maxime. Eius, ab?
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `Akshat Vyas - ${page}`;
  }, [page]);

  return (
    <div className="container">
      <Nav page={page} setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "Contact Me" && <Contact />}
    </div>
  );
}
