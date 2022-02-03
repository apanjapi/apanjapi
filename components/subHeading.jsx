import Image from "next/image";

const SubHeading = ({ title ,src, alt }) => {
  return (
    <div className="sub-heading">
      <h2>{title}</h2>
      <Image src={`/${src}.png`} alt={alt} width={30} height={30} />
    </div>
  );
};

export default SubHeading;
