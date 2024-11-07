import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import { PokemonListMain } from "../styles/PokemonListStyles";

const PokemonList = () => {
  return (
    <PokemonListMain>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          korean_name={pokemon.korean_name}
          img_url={pokemon.img_url}
          onDashboard={false}
        />
      ))}
    </PokemonListMain>
  );
};

export default PokemonList;
