import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import { PokemonListMain } from "../styles/PokemonListStyles";

const PokemonList = ({ handelAddPokemon, handleRemovePokemon }) => {
  return (
    <PokemonListMain>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          korean_name={pokemon.korean_name}
          img_url={pokemon.img_url}
          handelAddPokemon={handelAddPokemon}
          handleRemovePokemon={handleRemovePokemon}
          onDashboard={false}
        />
      ))}
    </PokemonListMain>
  );
};

export default PokemonList;
