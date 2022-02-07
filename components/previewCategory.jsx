import { useState } from "react";

const PreviewCategory = ({ title, text }) => {
  const [person, setPerson] = useState(false);
  return (
    <div className="preview-category">
      <p className="preview-category-title">{title}</p>
      <p className="preview-category-text">{text}</p>
    </div>
  );
};

export default PreviewCategory;
