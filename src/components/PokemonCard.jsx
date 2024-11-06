import { useNavigate } from "react-router-dom";
import {
  PokemonCardButton,
  PokemonCardImg,
  PokemonCardInfoWrap,
  PokemonCardItem,
  PokemonCardName,
  PokemonCardNumber,
} from "../styles/PokemonCardStyles";
import { useContext } from "react";
import { PokemonContext } from "../shared/PokemonContext";

const PokemonCard = ({ id, korean_name, img_url, onDashboard }) => {
  const nav = useNavigate();
  const formattedId = id.toString().padStart(3, "0");
  const { handelAddPokemon, handleRemovePokemon } = useContext(PokemonContext);

  const handleButtonAdd = (e) => {
    e.stopPropagation();
    if (onDashboard) {
      handleRemovePokemon(id);
    } else {
      handelAddPokemon({ id, korean_name, img_url });
    }
  };

  return (
    <PokemonCardItem
      onClick={() => {
        nav(`/pokemon-detail/${id}`);
      }}
    >
      <PokemonCardImg src={img_url} />
      <PokemonCardInfoWrap>
        <PokemonCardName>{korean_name}</PokemonCardName>
        <PokemonCardNumber>No. {formattedId}</PokemonCardNumber>
      </PokemonCardInfoWrap>
      <PokemonCardButton onClick={handleButtonAdd}>
        {onDashboard ? "삭제" : "추가"}
      </PokemonCardButton>
    </PokemonCardItem>
  );
};

export default PokemonCard;
