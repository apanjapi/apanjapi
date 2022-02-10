import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// components
import ResumeButton from "../components/resumeButton";
import ContactButton from "../components/contactButton";
import SubHeading from "../components/subHeading";
import PreviewCard from "../components/previewCard";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="container">
        <Head>
          <title>Amelie Panja&apos;s Space</title>
          <meta
            name="description"
            content="Amelie Panja's Personal Portfolio"
          />
          <link rel="icon" href="/seedling.png" />
        </Head>
      </div>
      <header className="header">
        <div onClick={() => router.push(`/`)}>
          <Image src="/amelie-logo.svg" alt="logo" width={100} height={50} />
        </div>
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
          <img src="/wave.gif" alt="wave emoji" width={40} height={40} />
          <h2>I&apos;m Amelie</h2>
        </div>
        <span className="intro-text">
          I&apos;m a&nbsp;
          <span className="tooltip">
            <span className="green">Product Designer</span>
            <p className="tooltiptext">Figma, Webflow, Axure, Framer</p>
          </span>
          &nbsp;and&nbsp;
          <span className="tooltip">
            <span className="blue">Front-End Developer</span>
            <p className="tooltiptext">JavaScript, HTML, CSS, Python</p>
          </span>
          &nbsp;specializing in Motion Graphics.
        </span>
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
              src="graphite.png"
              alt="Graphite preview"
              route="graphite"
              link="coming soon!"
              iconsrc="empty"
              iconalt="blank"
            />
            <PreviewCard
              heading="Connect to Kalm"
              description="A failed protothon to a successful self-help web application for stress and anxiety management."
              src="kalm.svg"
              alt="Kalm preview"
              route="kalm"
              link="coming soon!"
              iconsrc="empty"
              iconalt="blank"
            />
          </div>
          <div className="cards">
            <PreviewCard
              heading="404: Gears Styleguide"
              description="Creating a brand identity for custom peripheral accessory retailer."
              src="404-gear.svg"
              alt="404: Gear preview"
              route="404gear"
              link="Link to Project"
              iconsrc="arrow_forward"
              iconalt="foward arrow"
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
