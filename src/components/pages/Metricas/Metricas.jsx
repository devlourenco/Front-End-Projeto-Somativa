import styles from "../Metricas/Metricas.module.css";
import Select from "./MetricasComponents/Select";
import Input from "./MetricasComponents/Input";

export default function Metricas() {
  return (
    <section className={styles.corpo}>
      <h1 className={styles.titulo}>Montar Treino</h1>
      <div className={styles.selectContainer}>
        <Select />
      </div>
      <Input
        type="text"
        name="grupo_muscular"
        placeHolder="Digite o grupo muscular do treino"
        text="Grupo muscular"
        // handlerChangeTraining={handlerChangeTraining}
      />
      <Input
        type="text"
        name="exercicios"
        placeHolder="Digite os exercicios do treino"
        text="Exercicios"
        // handlerChangeTraining={handlerChangeTraining}
      />
      <Input
        type="text"
        name="repeticoes"
        placeHolder="Digite as repetições em cada exercício do treino"
        text="Repetições"
        // handlerChangeTraining={handlerChangeTraining}
      />
      <Input
        type="text"
        name="carga_do_treino"
        placeHolder="Digite a carga usada em cada exercício do treino"
        text="Carga por exercício"
        // handlerChangeTraining={handlerChangeTraining}
      />
    </section>
  );
}
