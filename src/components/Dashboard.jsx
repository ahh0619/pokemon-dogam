import {
  DashboardImg,
  DashboardItem,
  DashboardList,
  DashboardMain,
  DashboardTitle,
} from "../styles/DashboardStyles";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, handleRemovePokemon }) => {
  return (
    <DashboardMain>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardList>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            korean_name={pokemon.korean_name}
            img_url={pokemon.img_url}
            selectedPokemon={selectedPokemon}
            handleRemovePokemon={handleRemovePokemon}
            onDashboard={true}
          />
        ))}
        {Array.from({ length: 6 - selectedPokemon.length }).map((_, index) => (
          <DashboardItem key={`empty-${index}`}>
            <DashboardImg src={"../public/pokeball-13iwdk7Y.png"} />
          </DashboardItem>
        ))}
      </DashboardList>
    </DashboardMain>
  );
};

export default Dashboard;
