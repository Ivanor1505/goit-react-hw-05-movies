import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тінь */
  background-color: #fff;
  text-align: center;
`;

export const MovieInfoContainer = styled.div`
  display: block;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const InfoLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

export const MovieImage = styled.img`
  height: 550px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0;
`;

export const MovieScore = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

export const MovieGenres = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;
