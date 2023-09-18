import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ReviewName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;
