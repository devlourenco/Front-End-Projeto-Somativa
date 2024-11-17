import { useEffect, useState } from "react";
import style from "../Progresso/Progresso.module.css";
import Container from "../../layout/Container";
import TrainingCards from "./TrainingCards";
import TrainingContainer from "./TrainingContainer";
import costas from "../../../assets/back.jpg";

export default function Progresso() {
  const [training, setTraining] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allTraining", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data && data.data) {
          setTraining(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <section className={style.list_training_container}>
        <h1>LIST TRAININGS</h1>
        <TrainingContainer>
          {training.map((training) => (
            <TrainingCards
              idTreino={training.idTreino}
              grupo_muscular={training.grupo_muscular}
              imagem={costas}
              key={training.idTreino}
            />
          ))}
        </TrainingContainer>
      </section>
    </Container>
  );
}
