import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// components
import ResumeButton from "../components/resumeButton";
import ContactButton from "../components/contactButton";
import PreviewCategory from "../components/previewCategory";
import IconLink from "../components/iconLink";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Gear() {
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
            alt="LinkedIn"
          />
          <ContactButton
            link="mailto: apitch.panja@gmail.com"
            src="mail"
            alt="Email"
          />
          <ContactButton
            link="https://github.com/apanjapi"
            src="github"
            alt="GitHub"
          />
        </div>
      </header>
      <div className="main">
        <div className="preview-header">
          <a
            target="_blank"
            href="https://www.figma.com/proto/KTa3fMpqJ1Bu8GUp0i4Vuo/404-Gear-Website-Draft?page-id=85%3A307&node-id=87%3A1191&viewport=241%2C48%2C0.07&scaling=min-zoom"
            rel="noopener noreferrer"
          >
            <Image
              src="/404gear/404-preview.svg"
              alt="404: Gear preview"
              width={550}
              height={400}
            />
          </a>
          <div className="preview-header-description">
            <h1>404: Gear</h1>
            <p>
              Creating a brand identity for a custom peripheral accessory
              retailer. This project is actually a part of a bigger project
              which is the 404: Gear website.
            </p>
            <div className="preview-categories">
              <PreviewCategory title="Role" text="Research and Asset Design" />
              <PreviewCategory
                title="Duration"
                text="November - December 2020"
              />
              <PreviewCategory title="Category" text="Class Project" />
              <PreviewCategory
                title="Member"
                text={
                  <div className="preview-category-container">
                    <a
                      className="linkedin-link"
                      target="_blank"
                      href="https://www.linkedin.com/in/tdo2000/"
                      rel="noopener noreferrer"
                    >
                      Tyler Do
                    </a>
                    <span>(Product Design)</span>
                  </div>
                }
              />
            </div>
            <div className="icon-links">
              <IconLink
                src="figma"
                text="Link to Figma"
                alt="figma"
                target="_blank"
                href="https://www.figma.com/proto/KTa3fMpqJ1Bu8GUp0i4Vuo/404-Gear-Website-Draft?page-id=85%3A307&node-id=87%3A1191&viewport=241%2C48%2C0.07&scaling=min-zoom"
                rel="noopener noreferrer"
              />
              <IconLink
                src="arrow-down-circle"
                alt="arrow down"
                target=""
                href="#redesign"
                text="Jump to Revisit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="blue-bg">
        <div className="blue-statement">
          <p className="subtitle">PROBLEM</p>
          <h2 className="header2">
            What customization have we&apos;ve done and where did we get them?
          </h2>
          <p>
            404: Gear is driven by the common passion Tyler and I share. We love
            customizing our electronic peripherals. However, we could never find
            a place where we could purchase all of our custom parts or a place
            where the seller understands the buyer&apos;s needs. As for now, we
            would source out different forums of people selling their old parts.
            Below shows a brief overview of the process:
          </p>
          <Image
            src="/404gear/404-process.svg"
            alt="404: Gear process overview"
            width={1245}
            height={244}
          />
        </div>
      </div>
      <div className="contents">
        <h2 className="header2">Research</h2>
        <p>
          With frustration in mind, we wanted to see if anyone else also faces
          the same problem as us. If so, we wanted to really dive into
          understanding why it&apos;s frustrating, when people feel frustrated,
          and how people currently deal with the frustration.
        </p>
        <p className="subtitle">RESEARCH</p>
        <h3 className="header3">Competitive Analysis</h3>
        <p>
          We began doing some research to see what&apos;s out there currently.
          We noted down the popular platforms, identified the key features and
          aesthetic we want 404: Gear to have, and reassessed the existing
          platforms based on those features and aesthetics. To our surprise,
          there&apos;s not enough platform for those seeking custom peripherals
          and we see an opportunity.
        </p>
        <h3 className="header3">Key takeaways</h3>
        <ul>
          <li>
            Sometimes the{" "}
            <span className="bold">product names are hard to scan</span> because
            they are long lists of specs or tags for search.
            <li>
              <span className="bold">Images displayed are inconsistent</span>{" "}
              from different brands and images aren&apos;t compressed so the
              site could be <span className="bold">very slow on load</span>.
            </li>
            <li>
              Complaints on
              <span className="bold">
                limited selection and customization
              </span>{" "}
              for such a big existing industry.
            </li>
            <li>
              <span className="bold">Poor site navigation</span> cluttering all
              types of products together. Clients would have to know what
              they&apos;re looking for before browsing which causes a barrier to
              entry.
            </li>
            <li>
              <span className="bold">
                Missing a “theme” or a “personality.”
              </span>{" "}
              The site feels like a corporate business rather than a fun
              commercial site introducing people to hobbies.
            </li>
          </li>
        </ul>
        <div className="images">
          <Image
            src="/404gear/404-competitive.svg"
            alt="404: Gear sompetitive advantage"
            width={629}
            height={308}
          />
        </div>
        <p className="subtitle">RESEARCH</p>
        <h3 className="header3">Surveys</h3>
        <p>
          As no adequate solution exists we began to wonder perhaps no one else
          is affected by this pain point? To see if the problem is significant
          enough for us to take action, we made a survey.
        </p>
        <Image
          src="/404gear/404-survey.svg"
          alt="404: Gear survey result"
          width={1149}
          height={496}
        />
      </div>
      <div className="blue-bg">
        <div className="blue-statement">
          <div className="emoji-statement">
            <h2 className="header2">Key takeaways</h2>
            <Image src="/key.png" alt="key emoji" width={50} height={50} />
          </div>
          <p>
            The pain point IS significant! People care about how accessible it
            is to browse new products. Some even extensively research over
            multiple platforms and track limited time deals or preprelease
            products.
          </p>
          <ul>
            <li>
              Target user 1 -{" "}
              <span className="bold">Aesthetic Pleaser and Niche Hobbyist</span>{" "}
              finds that he needs to customize his setup to be unique from the
              crowd. When he is free, he enjoys looking at skins that are in
              production and watches streams of craftsmen and hobbyists.
            </li>
            <li>
              Target user 2 -{" "}
              <span className="bold">Collector and Tinkerer</span> is not afraid
              to pull apart her expensive consoles and mess around with
              soldering tools. She has different themes for each console&apos;s
              housing as she belongs to many fandoms and she also collects
              exclusive items from the games.
            </li>
          </ul>
        </div>
      </div>
      <div className="contents">
        <h2 className="header2">Prototype</h2>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/404gear/404-page-1.svg"
              alt="page 1"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-2.svg"
              alt="page 2"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-3.svg"
              alt="page 3"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-4.svg"
              alt="page 4"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-5.svg"
              alt="page 5"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-6.svg"
              alt="page 6"
              width={1190}
              height={847}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/404gear/404-page-7.svg"
              alt="page 7"
              width={1190}
              height={847}
            />
          </SwiperSlide>
        </Swiper>
        <p className="subtitle">PROTOTYPE</p>
        <h3 className="header3">What does 404: Gear mean to us?</h3>
        <p>
          Amelie: I chose the number 404 because I was inspired by “404: Page
          not found.” I wanted our brand to reflect something unique created by
          either mistakes or intentions. Computers usually come in a default
          black. We just want to show how customized things are just as
          beautiful.
        </p>
        <p>
          Tyler: I chose the word “gear” because our brand and company provides
          a wide variety of products that can&apos;t be covered in one concise
          word. As well as that I could cleverly draw inspiration from a manual
          gear shifter from a car for the logo.
        </p>
        <p className="subtitle">PROTOTYPE</p>
        <h3 className="header3">Branding</h3>
        <p>
          404: Gear is a custom peripheral accessory retailer that sells custom
          shells, cases, and accessories for peripherals, consoles, and PC’s. We
          encourage idiosyncratic creations uniquely customized for and by
          gamers like you.
        </p>
        <p className="subtitle">PROTOTYPE</p>
        <h3 className="header3">Our Mission</h3>
        <p>
          For consumers who want to purchase a wide product customization online
          with high quality material, 404: Gear provides a one-stop online
          shopping site. 404: Gear sets itself apart from other online retailers
          with its customer obsession, passion for innovation, and commitment to
          operational excellence.
        </p>
        <h2 className="header2">Asset Design</h2>
        <p className="subtitle">ASSET DESIGN</p>
        <h3 className="header3">Aesthetic</h3>
        <p>
          Pixel art is a form of digital art, created through the use of
          software, where images are edited on the pixel level. The aesthetic
          for this kind of graphics comes from 8-bit and 16-bit computers and
          video game consoles, in addition to other limited systems such as
          graphing calculators.
        </p>
        <p>
          Creating or modifying pixel art characters or objects for video games
          is sometimes called spriting, a term that arose from the hobbyist
          community. The term likely came from the term sprite, a term used in
          computer graphics to describe a two-dimensional bitmap that is used in
          tandem with other bitmaps to construct a larger scene.
        </p>
        <p>
          When designing an icon set I exhibit and deliberate three different
          attributes: <span className="blue-text">form</span>,{" "}
          <span className="blue-text">aesthetic unity</span>, and{" "}
          <span className="blue-text">recognition</span>.
        </p>
        <div className="images">
          <Image
            src="/404gear/404-icons.svg"
            alt="404: Gear icons"
            width={534}
            height={357}
          />
        </div>
        <p className="subtitle">ASSET DESIGN</p>
        <h3 className="header3">Form</h3>
        <div className="images">
          <Image
            src="/404gear/404-form.png"
            alt="404: Gear form"
            width={855.49}
            height={150}
          />
        </div>
        <p className="subtitle">ASSET DESIGN</p>
        <h3 className="header3">Aesthetic Unity</h3>
        <div className="images">
          <Image
            src="/404gear/404-aestheticunity.png"
            alt="404: Gear aesthetic unity"
            width={991.96}
            height={385}
          />
        </div>
        <p className="subtitle">ASSET DESIGN</p>
        <h3 className="header3">Recognition</h3>
        <div className="images">
          <Image
            src="/404gear/404-recognition.png"
            alt="404: Gear recognition"
            width={997}
            height={220.4}
          />
        </div>
        <h2 className="header2" id="redesign">
          Revisit during Portfolio Assembly
        </h2>
        <p>
          To wrap up this project, I actually re-visited this first ever
          project. If 404: Gear were actually a style guide for production, it
          would have not survived. To show my consideration of my product
          viability, the proposed solution is to understand the given data and
          display information properly. Better design system, high impact.
        </p>
        <div>
          <Image
            src="/404gear/404-revisit.svg"
            alt="404: Gear revisit"
            width={1000}
            height={700}
          />
        </div>
      </div>
      <div className="blue-bg">
        <div className="blue-statement">
          <h2 className="header2">Key Takeaways</h2>
          <h3 className="header3">Detatchment from my own bias</h3>
          <p>
            Understanding how to analyze and use research data to put myself in
            the user&apos;s shoes. This lets me validate or reject my own
            assumptions, formulate strong rationale for decisions, and turn
            feedback into opportunities.
          </p>
          <h3 className="header3">Understanding database</h3>
          <p>
            Big data is hard to display without confusing users especially with
            online retailers. The topic of sorting and displaying has brought
            confusion to many product designers. SInce this was one of my first
            projects I have no idea what I was doing for the image display. But
            after two years in this field, I&apos;ve learned the proper way to
            display big data. Check out my pokedex display project.
          </p>
          <h3 className="header3">Building a design system & Figma tricks!</h3>
          <p>
            Properly integrating a style guide into figma and creating a design
            system before prototyping real products really saved me countless
            hours and made it much easier to establish consistency, whether that
            be defining margins, font styles, or drop shadows.
          </p>
        </div>
      </div>
      <div className="contents">
        <h2 className="header2">What I would do diffrently?</h2>
        <p className="subtitle">REDESIGN</p>
        <h3 className="header3">Onboarding page</h3>
        <p>
          Onboarding helps give users a sense of what they&apos;ll need to
          understand in order to get what they need from our website. It&apos;s
          an additional way to establish credibility and build trust with users.
        </p>
        <div className="images">
          <Image
            src="/404gear/404-guide-1.svg"
            alt="404: Gear Onboarding Header"
            width={1440}
            height={412}
          />
        </div>
        <div className="images">
          <Image
            src="/404gear/404-guide-2.svg"
            alt="404: Gear Onboarding Header"
            width={1237}
            height={785}
          />
        </div>
        <p className="subtitle">REDESIGN</p>
        <h3 className="header3">Check out process</h3>
        <p>
          Anything I can do which ensures that the user knows exactly how much
          they need to pay before they get to checkout will decrease friction,
          increase transparency, improve user experience, reduce frustration,
          and lead to an overall increase in conversions.
        </p>
        <div className="images">
          <Image
            src="/404gear/404-checkout.svg"
            alt="404: Gear check out process"
            width={935}
            height={522}
          />
        </div>
        <p className="subtitle">REDESIGN</p>
        <h3 className="header3">Micro interactions</h3>
        <p>
          Since it was such an early stage of learning, I didn&apos;t realize
          the important of communicating with users using interactions. Users
          need a feedback for important actions they&apos;ve made such as add to
          card or even errors.
        </p>
        <div className="images">
          <Image
            src="/404gear/404-micro.svg"
            alt="404: Gear micro interactions"
            width={937}
            height={50}
          />
        </div>
        <h2 className="header2">Overall Product Redesign</h2>
        <div className="images">
          <Image
            src="/404gear/404-redesign-1.svg"
            alt="404: Gear product description"
            width={919}
            height={577}
          />
        </div>
        <div className="images">
          <Image
            src="/404gear/404-redesign-2.svg"
            alt="404: Gear key switch"
            width={925}
            height={802}
          />
        </div>
        <div className="images">
          <Image
            src="/404gear/404-redesign-3.svg"
            alt="404: Gear accessories"
            width={923}
            height={806}
          />
        </div>
        <div className="images">
          <Image
            src="/404gear/404-redesign-4.svg"
            alt="404: Gear function"
            width={920}
            height={756}
          />
        </div>
        <div className="images">
          <Image
            src="/404gear/404-redesign-5.svg"
            alt="404: Gear form"
            width={916}
            height={820}
          />
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
