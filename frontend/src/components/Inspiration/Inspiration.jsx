import React from 'react'
import './Inspiration.css'

import image1 from "../../assets/image4.jpg";
import image2 from "../../assets/image5.jpg";
import image3 from "../../assets/image6.jpg";

const cabins = [
  {
    location: "FOR THOSE WHO LOVE",
    title: "To Explore nature",
    
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image1,
    reviews: 82,
  },
  {
    location: "FOR THOSE WHO WANT",
    title: "To Relax, rest & re-set ",
    
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image2,
    reviews: 82,
  },
  {
    location: "FOR THOSE WHO HAVE",
    title: "Four-legged friends",
    
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    image: image3,
    reviews: 82,
  },
];

const Inspiration = () => {
  return (
    <div className='con'>
      <h2><u>Inspiratio</u>n for your next getaway</h2>
      <div className="cont">
        <p>We've curated some amazing experiences to help you find your next getaway</p>
        <a></a>
        </div>
    <div className="ins-container">
      {cabins.map((cabin, index) => (
        <div className="ins-card" key={index}>
          <img src={cabin.image} alt={cabin.title} className="cabin-image" />
          <div className="cabin-info">
            <span className="location">{cabin.location}</span>
            <h3 className="title">{cabin.title}</h3>
            
            <p className="description">{cabin.description}</p>
           
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Inspiration;