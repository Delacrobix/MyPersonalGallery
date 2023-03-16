import React, { useEffect, useState } from "react";
import { getAllImages, filterImages } from '../controllers/ImagesController'
import { useParams } from "react-router-dom";
import ImageCell from "../components/ImageCell";

import "../css/ImageGallery.css";

const ImageGallery = () => {

  const [images, setImages] = useState([]);
  const params = useParams();

  useEffect(() => {

    
    (async () => {
      const result = await getAllImages();
      const data = filterImages(params.tag, result);

      console.log(data)

      let matrix = [];
      let array = [];
      let aux = 0;
      let floor = Math.ceil(data.length / 4);

      for (let i = 0; i < data.length; i++) {
        array.push(data[i]);

        aux++;

        if (aux > floor) {
          aux = 0;
          matrix.push(array);
          array = [];
        }
      }

      for (let i = 0; i < array.length; i++) {
        matrix[Math.floor(Math.random() * matrix.length)].push(array[i]);
      }

      setImages(matrix);
    })();
  }, []);

  return (
    <div className="row-n">
      {images.map((arr) => {
        return (
          <div className="column" key={Math.random()}>
            {arr.map((image) => {
              return (
                <ImageCell id={image.id} urlThumbnail={image.urlThumbnail} title={image.title}/>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;