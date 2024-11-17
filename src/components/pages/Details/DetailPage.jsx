import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TrainingDetailsStyle.module.css";
import costas from '../../../assets/back.jpg';

export default function TrainingDetails() {
  const { idTreino } = useParams();
  const [training, setTraining] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/listTraining/${idTreino}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data && !data.errorStatus) {
          setTraining(data.training);
        }
      })
      .catch((error) => console.error("Erro ao buscar detalhes do treino:", error));
  }, [idTreino]);

  if (!training) {
    return <p className={styles.loadingMessage}>Carregando detalhes...</p>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{training.grupo_muscular}</h1>
      <div className={styles.imgContainer}>
        <img
          src={costas}
          alt={training.grupo_muscular}
          className={styles.img}
        />
      </div>
      <p>
        <strong>Exercícios:</strong> {training.exercicios}
      </p>
      <p>
        <strong>Repetições:</strong> {training.repeticoes}
      </p>
      <p>
        <strong>Carga do treino:</strong> {training.carga_do_treino}
      </p>
    </div>
  );
}
