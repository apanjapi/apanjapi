import { route } from "next/dist/server/router";
import Image from "next/image";
import { useRouter } from "next/router";

const PreviewCard = ({ heading, description, src, alt, route }) => {
  const router = useRouter();
  return (
    <div className="preview-card">
      <h2>{heading}</h2>
      <div className="description">
        <p>{description}</p>
        <Image src={`/${src}`} alt={alt} width={675} height={425} />
      </div>
      <button type="button" onClick={() => router.push(`/${route}`)}>
        <a>Link to project</a>
        <Image src="/arrow_forward.png" alt="arrow" width={20} height={20} />
      </button>
    </div>
  );
};

export default PreviewCard;
