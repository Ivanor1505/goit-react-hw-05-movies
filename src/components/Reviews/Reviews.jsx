import { fetchReviewsById } from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewItem,
  ReviewName,
  ReviewText,
  ReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function getReviewsData() {
      try {
        const data = await fetchReviewsById(movieId);
        if (data.results.length === 0) {
          setNoResults(true);
        } else {
          setReviews(data.results);
        }
      } catch (error) {
        console.log(error);
        setError('Помилка при завантаженні даних.');
      }
    }
    getReviewsData();
  }, [movieId]);

  return (
    <div>
      {noResults ? (
        <p>No results found.</p>
      ) : (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => (
            <ReviewItem key={id}>
              <ReviewName>{author}</ReviewName>
              <ReviewText>{content}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewsList>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Reviews;
