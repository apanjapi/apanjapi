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
          <meta property="og:title" content="Amelie Panja's Space" />
          <meta
            property="og:description"
            content="Amelie Panja's Personal Portfolio"
          />
          <meta
            property="og:url"
            content="https://amelie-panja-space.netlify.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            name="viewport"
            content="width=device-width; initial-scale=1.0"
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
        <div className="hero-section">
          <div className="hero-intro">
            <div className="intro">
              <img src="/wave.gif" alt="wave emoji" width={40} height={40} />
              <h2>Hi! I&nbsp;m Amelie</h2>
            </div>
            <span className="intro-text">
              and I&nbsp;m a Vancouver Based&nbsp;
              <span className="tooltip">
                <span className="green">Product Designer</span>
                <p className="tooltiptext">Figma, Webflow, Axure, Framer</p>
              </span>
              &nbsp;with a&nbsp;
              <span className="tooltip">
                <span className="blue">coding background.</span>
                <p className="tooltiptext">JavaScript, HTML, CSS, Python</p>
              </span>
            </span>
            <div>
              <p className="intro-text-bottom">
                I design for metrics, strategy, heuristic, and enjoyable
                experiences.
              </p>
            </div>
          </div>
          <div className="hero-img-cont">
            <Image
              src="/amelie-profile.jpg"
              alt="Amelie's Profile Picture"
              width={270}
              height={400}
              className="hero-img"
            />
          </div>
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
