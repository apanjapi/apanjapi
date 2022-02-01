import Image from "next/image";

const ContactButton = ({ link, src, alt }) => {
  return (
    <button className="contact-button">
      <a target="_blank" href={link} rel="noopener noreferrer">
        <Image src={`/${src}.png`} alt={alt} width={20} height={20} />
      </a>
    </button>
  );
};

export default ContactButton;
