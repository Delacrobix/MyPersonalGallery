import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const LOCAL = "https://localhost:7286";

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
      setImages(await getImages());
    })();
  }, []);

  return (
    <div className="row">
      {images.map((image) => (
        <div
          className="col-md-4 p-1 card-image"
          onClick={() => navigate(`/images/${image.id}`)}
          key={image.id}
        >
          <img src={image.url} className="img-fluid" alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
