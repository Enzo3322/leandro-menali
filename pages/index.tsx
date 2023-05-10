import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import ExpertiseCardCarousel from "@/components/Expertise";
import { GiArchiveResearch } from "react-icons/gi";
import { BsDatabaseFillCheck, BsGraphUp } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";

export default function Home() {
  const expertiseSkills = [
    {
      children: <BsGraphUp size={40} />,
      title: "Strategy & Direction",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      children: <GiArchiveResearch size={40} />,
      title: "Branding & Logo",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      children: <GrUserExpert size={40} />,
      title: "Researching",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      children: <BsDatabaseFillCheck size={40} />,
      title: "Data science",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <>
      <Head>
        <title>Leandro Menali</title>
        <meta
          name="description"
          content="Im a junior Data Scientist Bacharelor in Petroleum Engineering"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Expertise</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className={styles.contactButton}>Contact me</button>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.textContainer}>
            <p className={styles.introText}>Hey, I am Leandro</p>
            <h1 className={styles.mainText}>
              I am a junior{" "}
              <b>
                Data
                <br /> Scientist
              </b>
            </h1>
            <p className={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button className={styles.getInTouch}>Get In Touch</button>
          </div>
          <div className={styles.imageContainer}>
            <picture>
              <img src="profile.png" alt="" />
            </picture>
            <span></span>
          </div>
        </section>

        <section className={styles.skills}>
          <div className={styles.headerContainer}>
            <p className={styles.preTitle}>My Skills</p>
            <h2 className={styles.title}>My Expertise</h2>
          </div>
          <div>
            <ExpertiseCardCarousel data={expertiseSkills} />
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.imageContainer}>
            <img src="profile.png" alt="" />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.preTitle}>About</p>
            <h2 className={styles.title}>
              About <b>Me</b>
            </h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
          </div>
        </section>

        <section className={styles.portfolio}>
          <div className={styles.headerContainer}>
            <div className={styles.headerContainer}>
              <p className={styles.preTitle}>Recent Projects</p>
              <h2 className={styles.title}>My Portfolio</h2>
            </div>
            <button className={styles.visitMyGithub}>Visit My Github</button>
          </div>
          <div>
            {/* CARD CONSUMINDO API DO GITHUB */}
            <div className={styles.cardContainer}>
              <div className={styles.card}></div>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <p className={styles.preTitle}>Get In Touch</p>
          <h2 className={styles.title}>Contact me</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.buttons}>
            <button className={styles.linkedin}>Linkedin</button>
            <button className={styles.github}>Github</button>
            <button className={styles.gmail}>Gmail</button>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.links}>
          <li>Home</li>
          <li>Portfolio</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
        <div className={styles.socialIcons}>
          <div>
            <a
              href="https://www.linkedin.com/in/leandro-menali-ferreira-463355165/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/leandromenali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
