import styled from "styled-components";

const DetailMain = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  place-items: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DetailImg = styled.img`
  width: 200px;
  height: 200px;
`;

const DetailTitle = styled.h2`
  margin: 20px 0px;
  color: rgb(255, 0, 0);
`;

const DetailInfo = styled.p`
  color: black;
  font-size: 18px;
`;

const DetailButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  &:hover {
    background-color: #646cff;
  }
`;

export { DetailMain, DetailImg, DetailTitle, DetailInfo, DetailButton };
