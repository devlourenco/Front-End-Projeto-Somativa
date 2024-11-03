import styles from "../Metricas/Metricas.module.css";
import Select from "./MetricasComponents/Select";
import Input from "./MetricasComponents/Input";
import Button from "./MetricasComponents/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Metricas() {
  const navigate = useNavigate();

  const [training, setTraining] = useState({});

  function handlerChangeTraining(event) {
    setTraining({ ...training, [event.target.name]: event.target.value });
    console.log(training);
  }

  useEffect(() => {
    fetch(() => {
      fetch("http://localhost:5000/allTraining", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow_Headers": "*",
        },
      });
    });
  });

  function createTraining(training) {
    fetch("http://localhost:5000/InsertTraining", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify(training),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/progresso", { state: "Treino Registrado" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submit(event) {
    event.preventDefault();
    console.log("Treino a ser criado:", training); 
    createTraining(training);
  }

  return (
    <section className={styles.corpo}>
      <h1 className={styles.titulo}>Montar Treino</h1>
      <form onSubmit={submit}>
        <div className={styles.selectContainer}>
          <Select />
        </div>
        <Input
          type="text"
          name="grupo_muscular"
          placeholder="Digite o grupo muscular do treino"
          handlerChangeTraining={handlerChangeTraining}
        />
        <Input
          type="text"
          name="exercicios"
          placeholder="Digite os exercicios do treino"
          handlerChangeTraining={handlerChangeTraining}
        />
        <Input
          type="text"
          name="repeticoes"
          placeholder="Digite as repetições em cada exercício do treino"
          handlerChangeTraining={handlerChangeTraining}
        />
        <Input
          type="text"
          name="carga_do_treino"
          placeholder="Digite a carga usada em cada exercício do treino"
          handlerChangeTraining={handlerChangeTraining}
        />

        <Button rotulo="Inserir Treino" />
      </form>
    </section>
  );
}
