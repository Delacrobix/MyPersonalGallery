import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageCell = (props) => {
  const navigate = useNavigate();

  const { imageData, id, title, tag, currentPath } = props;

  const imageUrl = `data:image/jpeg;base64,${imageData}`;

  function handleClick() {
    navigate(`/images/${tag}/${title}`, {
      state: {
        id: id,
        imageData: imageData,
        title: title,
        tag: tag,
        currentPath: currentPath,
      },
    });
  }

  return (
    <div onClick={handleClick} key={id}>
      <img src={imageUrl} className='image-cell' alt={title} />
    </div>
  );
};

export default ImageCell;
