import styled from 'styled-components';

export const MovieSearch = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    border-color: blue;
  }

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const SearchButton = styled.button`
  background-color: blue;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ListMovies = styled.ul`
font-size: 20px;
display: flex;
flex-direction: column;
gap: 10px;
list-style: none;
padding: 0;
`;