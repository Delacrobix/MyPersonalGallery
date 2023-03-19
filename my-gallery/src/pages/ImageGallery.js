import React, { useEffect, useState } from "react";
import { getAllImages, filterImages } from "../controllers/ImagesController";
import { useParams } from "react-router-dom";
import ImageCell from "../components/ImageCell";

import "../css/ImageGallery.css";

const ImageGallery = () => {
  const { tag } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getAllImages();
      const data = filterImages(tag, result);

      let matrix = [];
      let floor;
      let array = [];
      let aux = 0;

      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        floor = Math.ceil(data.length / 3);
      } else {
        floor = Math.ceil(data.length / 4);
      }

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
  }, [tag]);

  return (
    <div className="row-n">
      {images.map((arr) => {
        return (
          <div className="column" key={Math.random()}>
            {arr.map((image) => {
              return (
                <ImageCell
                  id={image.id}
                  urlThumbnail={image.urlThumbnail}
                  title={image.title}
                  tag={tag}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
