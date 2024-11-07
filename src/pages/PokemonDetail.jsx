import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handelAddPokemon, handleRemovePokemon } from "../redux/PokemonSlice";
import MOCK_DATA from "../data/MOCK_DATA";
import {
  DetailButton,
  DetailHandleButton,
  DetailImg,
  DetailInfo,
  DetailMain,
  DetailTitle,
} from "../styles/PokemonDetailStyles";

const PokemonDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);
  const currentPokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
  const isAdded = selectedPokemon.some(
    (pokemon) => pokemon.id === currentPokemon.id
  );

  const handleButtonClick = () => {
    if (isAdded) {
      dispatch(handleRemovePokemon(currentPokemon.id));
    } else {
      dispatch(handelAddPokemon(currentPokemon));
    }
  };

  return (
    <DetailMain>
      <DetailImg src={currentPokemon.img_url} />
      <DetailTitle>{currentPokemon.korean_name}</DetailTitle>
      <DetailInfo>타입 : {currentPokemon.types.join(", ")}</DetailInfo>
      <DetailInfo>{currentPokemon.description}</DetailInfo>
      <DetailHandleButton onClick={handleButtonClick}>
        {isAdded ? "삭제" : "추가"}
      </DetailHandleButton>
      <DetailButton
        onClick={() => {
          nav(-1);
        }}
      >
        뒤로 가기
      </DetailButton>
    </DetailMain>
  );
};

export default PokemonDetail;
