import styled from "styled-components";

const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const DashboardTitle = styled.h2`
  margin-bottom: 20px;
  color: rgb(255, 0, 0);
`;

const DashboardList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const DashboardItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const DashboardImg = styled.img`
  width: 50px;
  height: 50px;
`;

export {
  DashboardMain,
  DashboardTitle,
  DashboardList,
  DashboardItem,
  DashboardImg,
};
