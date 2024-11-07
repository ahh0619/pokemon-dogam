import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./PokemonSlice";

export const PokemonStore = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default PokemonStore;
