import React from "react";
import "../styles/brandDropCard.css";
import rectangle from "../images/Rectangle 23.png";
import unsplash from "../images/unsplash_niUkImZcSP8.png";
const BrandDropCard = () => {
  return (
    <div className="myCard">
      <div className="card shadow">
        <img className="imgg" src={rectangle} alt="" />
        <div className="name">
          <div className="text-name">@Johny</div>
          <div className="text-name">Announcing</div>
        </div>
        <div className="image">
          <img className="unsplash" alt="Unsplash" src={unsplash} />
          <div className="text-herm">Hermes</div>
        </div>
        <div className="text-lor">Lorem Ipsum dolor</div>
        <div className="parag">
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut
          placerat scelerisque viverra adipiscing ut semper.{" "}
        </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDropCard;
