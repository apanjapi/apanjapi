import Image from "next/image";

const IconLink = ({ src, alt, target, href, text }) => {
  return (
    <div className="icon-link">
      <Image src={`/${src}.png`} alt={alt} width={30} height={30} />
      <a target={target} href={href} rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};
export default IconLink;
