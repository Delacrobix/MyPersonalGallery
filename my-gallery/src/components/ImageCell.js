import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageCell = (props) => {
  const navigate = useNavigate();

  const { imageData, id, title, tag } = props;

  const imageUrl = `data:image/jpeg;base64,${imageData}`;

  function handleClick() {
    navigate(`/images/${tag}/${title}`);
  }

  return (
    <div onClick={handleClick} key={id}>
      <img src={imageUrl} className='image-cell' alt={title} />
    </div>
  );
};

export default ImageCell;
