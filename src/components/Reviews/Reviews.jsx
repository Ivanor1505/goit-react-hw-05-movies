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
    <ReviewsList>
      {reviews.map(({ author, content, id }) => (
        <ReviewItem key={id}>
          <ReviewName>{author}</ReviewName>
          <ReviewText>{content}</ReviewText>
        </ReviewItem>
      ))}
    </ReviewsList>
  );
};

export default Reviews;
