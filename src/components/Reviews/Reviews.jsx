import { fetchReviewsById } from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviewsData() {
      try {
        const data = await fetchReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsData();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
