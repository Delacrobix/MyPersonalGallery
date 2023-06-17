import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImage } from '../controllers/ImagesController';
import { adaptiveImage } from '../assets/js/styles';
import Loading from '../components/feedback/loading';
import ErrorAlert from '../components/feedback/errorAlert';

const ImageDetail = () => {
  const { title, tag } = useParams();
  const [imageUrl, setImagesUrl] = useState([]);
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getImage(title);

      if (!result) {
        setError(true);
      }

      setIsLoading(false);

      setImages(result);
    })();
  }, [title]);

  useEffect(() => {
    if (image) {
      setImagesUrl(`data:image/jpeg;base64,${image.imageData}`);
    }
    adaptiveImage();
  }, [image]);

  return (
    <div className='row'>
      {error ? (
        <div className='error-container'>
          <ErrorAlert />
        </div>
      ) : isLoading ? (
        <div className='loading-container'>
          <Loading />
        </div>
      ) : (
        <div className='card' id='card-detailImage-container'>
          <div className='card-body' id='card-body'>
            <img
              src={imageUrl}
              alt={image.title}
              className='card-img-top'
              id='image-detail-img'
            />
            <div className='title-button-container'>
              <h3>{image.title}</h3>
              <Link id='link-detail' to={`/home/${tag}`}>
                Regresar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
