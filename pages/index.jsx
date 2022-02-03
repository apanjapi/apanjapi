import Head from "next/head";
import Image from "next/image";

// components
import ResumeButton from "../components/resumeButton";
import ContactButton from "../components/contactButton";
import SubHeading from "../components/subHeading";
import PreviewCard from "../components/previewCard";

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
      <div className="main">
        <div className="intro">
          <Image src="/wave.gif" alt="wave emoji" width={40} height={40} />
          <h2>I&apos;m Amelie</h2>
        </div>
        <p className="intro-text">
          I&apos;m a&nbsp;
          <p className="tooltip">
            <p className="yellow">Product Designer</p>
            <p className="tooltiptext">Figma, Webflow, Axure, Framer</p>
          </p>
          &nbsp;and&nbsp;
          <p className="tooltip">
            <p className="blue">Front-End Developer</p>
            <p className="tooltiptext">JavaScript, HTML, CSS, Python</p>
          </p>
          &nbsp;specizlizing in Motion Graphics.
        </p>
        <div>
          <p className="intro-text-bottom">
            I&apos;m experienced in designing and developing cross platform
            applications.
          </p>
        </div>
        <div>
          <SubHeading
            title="Projects I learned from"
            src="book"
            alt="book emoji"
          />
          <div className="cards">
            <PreviewCard
              heading="Graphite"
              description="Instant messaging and collaborative schoolwork management platform."
              src="graphite"
              alt="Graphite preview"
              route="graphite"
            />
            <PreviewCard
              heading="Connect to Kalm"
              description="A failed protothon to a successful self-help web application for stress and anxiety management."
              src="kalm"
              alt="Kalm preview"
              route="kalm"
            />
          </div>
          <div className="cards">
            <PreviewCard
              heading="404: Gears Styleguide"
              description="Creating a brand identity for custom peripheral accessory retailer."
              src="404gears"
              alt="404: Gears preview"
              route="404gears"
            />
          </div>
        </div>
      </div>
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
        <p className="copyright">Designed & Coded by Amelie Panja | 2021 </p>
      </footer>
    </div>
  );
}
