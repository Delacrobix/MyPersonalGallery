import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/imageDetail.css"

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
      <div className="">
        <div className="card bg-dark">
          <div className="card-body">
            <img src={image.urlFullScale} alt={image.title} className="card-img-top" />
            <div className="card-body">
              <h3>{image.title}</h3>
              <Link id="link-detail" to="/">Regresar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
