import style from "./TrainingCards.module.css";

const TrainingCards = ({ grupo_muscular, imagem }) => {
  return (
    <div className={style.trainingCard}>
      <h3 className={style.grupo_muscular}>{grupo_muscular}</h3>
      <img src={imagem} alt={grupo_muscular} title={grupo_muscular} />
    </div>
  );
};

export default TrainingCards
