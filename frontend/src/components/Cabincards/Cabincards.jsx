import React from "react";
import "./Cabincards.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import StarRating from "../ui/stars";









const cabins = [
  {
    location: "HAMPSHIRE • ENGLAND",
    title: "Rustic country retreat",
    price: "£210",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image1,
    reviews: 82,
  },
  {
    location: "NORFOLK • ENGLAND",
    title: "Cozy getaway cabin",
    price: "£312",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image2,
    reviews: 82,
  },
  {
    location: "HAMPSHIRE • ENGLAND",
    title: "Rustic country retreat",
    price: "£210",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image3,
    reviews: 82,
  },
];

const CabinCards = () => {
  return (
    <div className="cabin-cards">
      <h2><u>Discover o</u>ur idyllic countryside cabins</h2>
      <div className="cont">
        <p>fully equipped kitchen and bathroom with plenty of walking and cycling routes to explore</p>
        <a></a>
        </div>
    <div className="cabin-container">
      {cabins.map((cabin, index) => (
        <div className="cabin-card" key={index}>
          <img src={cabin.image} alt={cabin.title} className="cabin-image" />
          <div className="cabin-info">
            <span className="location">{cabin.location}</span>
            <h3 className="title">{cabin.title}</h3>
            <span className="price">{cabin.price}<sup>pp</sup></span>
            <p className="description">{cabin.description}</p>
            <div className="reviews"> <StarRating rating={4} totalStars={5} />{cabin.reviews} reviews</div>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default CabinCards;
