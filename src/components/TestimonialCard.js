import star from "./img/star.png";
import '../styles/TestimonialCard.css';

const ratingLevels = { '0.5': star, '1': star, };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>
        {customer.rating.map((ratingPoint, index) => 
          <img
            key={index}
            style={{  width: "2rem"}}
            src={star}
            icon={ratingLevels[ratingPoint]}
            size="xs" 
          />
        )}
      </span>
      <blockquote><p>"{customer.says}"</p></blockquote>
    </article>
  );
};

export default TestimonialCard;
