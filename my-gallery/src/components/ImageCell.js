import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCell = ({urlThumbnail, id, title}) => {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate(`/images/${id}`)} key={id}>
      <img src={urlThumbnail} className="image-cell" alt={title} />
    </div>
  );
};

export default ImageCell;
