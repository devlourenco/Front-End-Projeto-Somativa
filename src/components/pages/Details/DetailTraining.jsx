import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./DetailTraining.module.css";
import costas from "../../../assets/back.jpg"

export default function DetailTraining() {
  const navigate = useNavigate();
  const { idTreino } = useParams();
  const [trainingDetails, setTrainingDetails] = useState(null);

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
          setTrainingDetails(data.training);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idTreino]);

  const handleUpdate = () => {
    fetch(`http://localhost:5000/editTraining/${idTreino}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trainingDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.errorStatus) {
          navigate("/progresso");
        }
      })
      .catch((error) => {
        console.error("Erro ao atualizar treino:", error);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/deleteTraining/${idTreino}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.errorStatus) {
          navigate("/progresso");
        }
      })
      .catch((error) => {
        console.error("Erro ao deletar treino:", error);
      });
  };

  const handleChange = (event) => {
    setTrainingDetails({
      ...trainingDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.container}>
      {trainingDetails && (
        <div className={styles.content}>
          <div className={styles.container_img}>
            <img
              src={trainingDetails.imagem || costas}
              alt={trainingDetails.grupo_muscular}
              className={styles.img_training_detail}
            />
          </div>
          <div className={styles.info}>
            <input
              type="text"
              name="grupo_muscular"
              value={trainingDetails.grupo_muscular}
              onChange={handleChange}
              placeholder="Digite o grupo muscular do treino"
              className={styles.grupo_muscular}
            />
            <input
              type="text"
              name="exercicios"
              value={trainingDetails.exercicios}
              onChange={handleChange}
              placeholder="Digite os exercicios do treino"
              className={styles.exercicios}
            />
            <input
              type="text"
              name="repeticoes"
              value={trainingDetails.repeticoes}
              onChange={handleChange}
              placeholder="Digite as repetições em cada exercício do treino"
              className={styles.repeticoes}
            />
            <input
              type="text"
              name="carga_do_treino"
              value={trainingDetails.carga_do_treino}
              onChange={handleChange}
              placeholder="Digite a carga usada em cada exercício do treino"
              className={styles.carga_de_treino}
            />
          </div>
          <div className={styles.buttons}>
            <button className={styles.updateButton} onClick={handleUpdate}>
              Atualizar
            </button>
            <button className={styles.deleteButton} onClick={handleDelete}>
              Deletar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
