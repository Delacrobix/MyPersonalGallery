import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImage } from '../controllers/ImagesController';

const ImageDetail = () => {
  const { title, tag } = useParams();
  const [imageUrl, setImagesUrl] = useState([]);
  const [image, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const imageData = await getImage(title);
      setImages(imageData);

      const url = `data:image/jpeg;base64,${imageData.imageData}`;
      setImagesUrl(url);
    })();
  });

  return (
    <div className='row'>
      <div className='card bg-dark'>
        <div className='card-body'>
          <img src={imageUrl} alt={image.title} className='card-img-top' />
          <div className='card-body'>
            <h3>{image.title}</h3>
            <Link id='link-detail' to={`/home/${tag}`}>
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
