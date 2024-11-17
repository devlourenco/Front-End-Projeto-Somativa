import { useNavigate } from "react-router-dom";
import style from "./TrainingCards.module.css";

const TrainingCards = ({ idTreino, grupo_muscular, imagem }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/DetailTraining/${idTreino}`);
  };

  return (
    <div className={style.trainingCard} onClick={handleCardClick}>
      <h3 className={style.grupo_muscular}>{grupo_muscular}</h3>
      <img src={imagem} alt={grupo_muscular} title={grupo_muscular} />
    </div>
  );
};

export default TrainingCards;
