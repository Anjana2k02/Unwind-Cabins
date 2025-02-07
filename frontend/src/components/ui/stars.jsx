import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= rating ? solidStar : regularStar}
        className="text-yellow-400" // Customize star color
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;