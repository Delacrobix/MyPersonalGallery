import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImageDetail = () => {
  const LOCAL = "https://localhost:7286";
  const params = useParams();
  const [image, setImages] = useState({
    title: "",
    downloadUrl: "",
  });

  useEffect(() => {
    const getImage = async () => {
      let _data;
      await fetch(`${LOCAL}/api/images/${params.id}`, {
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
      setImages(await getImage());
    })();
  });

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card bg-dark">
          <div className="card-body">
            <img src={image.url} alt={image.title} className="card-img-top" />
            <div className="card-body">
              <h3>{image.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
