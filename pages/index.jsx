import Head from "next/head";
import Image from "next/image";

// components
import ResumeButton from "../components/resumeButton";
import ContactButton from "../components/contactButton";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Head>
          <title>Amelie Panja&apos;s Space</title>
          <meta
            name="description"
            content="Amelie Panja's Personal Portfolio"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <header className="header">
        <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        <div className="contact">
          <ResumeButton />
          <ContactButton
            link="https://www.linkedin.com/in/amelie-panja/"
            src="linkedin"
            alt={"LinkedIn"}
          />
          <ContactButton
            link="mailto: apitch.panja@gmail.com"
            src="mail"
            alt={"Email"}
          />
          <ContactButton
            link="https://github.com/apanjapi"
            src="github"
            alt={"GitHub"}
          />
        </div>
      </header>
      <div className="intro"></div>
      <footer className="footer">
        <p>
          Scrolled all the way to the bottom? You&apos;re curious... I like you.
          Let&apos;s chat
        </p>
        <div className="contact">
          <ContactButton
            link="https://www.linkedin.com/in/amelie-panja/"
            src="linkedin"
            alt={"LinkedIn"}
          />
          <ContactButton
            link="mailto: apitch.panja@gmail.com"
            src="mail"
            alt={"Email"}
          />
          <ContactButton
            link="https://github.com/apanjapi"
            src="github"
            alt={"GitHub"}
          />
        </div>
        <p>Designed & Coded by Amelie Panja | 2021 </p>
      </footer>
    </div>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{" "}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    // </div>
  );
}
