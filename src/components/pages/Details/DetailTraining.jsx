import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Details/DetailTraining.module.css";
import costas from "../../../assets/back.jpg";

const DetailTraining = () => {
  const idTreino = useParams();
  console.log("Código do treino :" + idTreino);

  const [training, setTraining] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/training/${idTreino}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTraining(data.training);
        console.log(data.training);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idTreino]);

  return (
    <div className={style.grid}>
      <div className={style.container_img}>
        <img
          className={style.img_training_detail}
          src={costas}
          alt="Treino de costas"
        />
      </div>

      <div className={style.info}>
        <span className={style.grupo_muscular}>{training.grupo_muscular}</span>

        <span className={style.exercicios}>{training.exercicios}</span>

        <span className={style.repeticoes}>{training.repeticoes}</span>

        <span className={style.carga_de_treino}>
          {training.carga_de_treino}
        </span>
      </div>
    </div>
  );
};

export default DetailTraining;
