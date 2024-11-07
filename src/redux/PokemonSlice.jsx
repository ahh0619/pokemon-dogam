import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    handelAddPokemon: (state, action) => {
      const existingPokemon = state.find((p) => p.id === action.payload.id);
      if (existingPokemon) {
        toast.info("이미 추가된 포켓몬입니다.");
        return;
      }
      if (state.length >= 6) {
        toast.info("최대 6개까지만 추가할 수 있습니다.");
        return;
      }
      state.push(action.payload);
    },
    handleRemovePokemon: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { handelAddPokemon, handleRemovePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
