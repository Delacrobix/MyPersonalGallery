import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImage } from '../controllers/ImagesController';
import Loading from '../components/feedback/loading';

const ImageDetail = () => {
  const { title, tag } = useParams();
  const [imageUrl, setImagesUrl] = useState([]);
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('Title: ', title);
    (async () => {
      setIsLoading(true);
      const result = await getImage(title);

      console.log('Result: ', result);
      setIsLoading(false);

      setImages(result);
    })();
  }, [title]);

  useEffect(() => {
    if (image.imageData) {
      setImagesUrl(`data:image/jpeg;base64,${image.imageData}`);
    }
  }, [image]);

  return (
    <div className='row'>
      <div className='card bg-dark'>
        <div className='card-body'>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <img src={imageUrl} alt={image.title} className='card-img-top' />
              <div className='title-button-container'>
                <h3>{image.title}</h3>
                <Link id='link-detail' to={`/home/${tag}`}>
                  Regresar
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
