import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

export const CastItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
`;
