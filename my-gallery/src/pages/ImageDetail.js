import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getImage } from "../controllers/ImagesController";

import "../css/imageDetail.css";

const ImageDetail = () => {
  const {id, tag} = useParams();
  const [image, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      setImages(await getImage(id));
    })();
  });

  return (
    <div className="row">
      <div className="">
        <div className="card bg-dark">
          <div className="card-body">
            <img
              src={image.urlFullScale}
              alt={image.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h3>{image.title}</h3>
              <Link id="link-detail" to={`/home/${tag}`}>
                Regresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
