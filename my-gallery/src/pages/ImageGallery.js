import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/ImageGallery.css";

const LOCAL = process.env.REACT_APP_BACKEND_URL;

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getImages = async () => {
      let _data;
      await fetch(`${LOCAL}/api/images/get-all`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          _data = data;
        })
        .catch((err) => {
          console.error(err);
        });

      return _data;
    };

    (async () => {
      const data = await getImages();
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
                <div
                  onClick={() => navigate(`/images/${image.id}`)}
                  key={image.id}
                >
                  <img
                    src={image.urlThumbnail}
                    className="image-cell"
                    alt={image.title}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
