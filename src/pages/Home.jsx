import { useNavigate } from "react-router-dom";
import { MainButton, MainPage, PokemonLogo } from "../styles/HomeStyles";

const Home = () => {
  const nav = useNavigate();
  return (
    <MainPage>
      <PokemonLogo src="/pokemon-logo-RN0wntMB.png" />
      <MainButton
        onClick={() => {
          nav("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </MainButton>
    </MainPage>
  );
};

export default Home;
