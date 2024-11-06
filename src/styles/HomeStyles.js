import styled from "styled-components";

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const PokemonLogo = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

const MainButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(204, 0, 0);
  }
`;

export { MainPage, PokemonLogo, MainButton };
