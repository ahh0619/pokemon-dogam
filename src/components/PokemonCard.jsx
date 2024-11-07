import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handelAddPokemon, handleRemovePokemon } from "../redux/PokemonSlice";
import {
  PokemonCardButton,
  PokemonCardImg,
  PokemonCardInfoWrap,
  PokemonCardItem,
  PokemonCardName,
  PokemonCardNumber,
} from "../styles/PokemonCardStyles";

const PokemonCard = ({ id, korean_name, img_url, onDashboard }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const formattedId = id.toString().padStart(3, "0");

  const handleButton = (e) => {
    e.stopPropagation();
    if (onDashboard) {
      dispatch(handleRemovePokemon(id));
    } else {
      dispatch(handelAddPokemon({ id, korean_name, img_url }));
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
      <PokemonCardButton onClick={handleButton}>
        {onDashboard ? "삭제" : "추가"}
      </PokemonCardButton>
    </PokemonCardItem>
  );
};

export default PokemonCard;
