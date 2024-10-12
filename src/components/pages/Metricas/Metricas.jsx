import styles from "../Metricas/Metricas.module.css";
import Select from "./MetricasComponents/Select";

export default function Metricas() {
  return (
    <section className={styles.corpo}>
      <h1 className={styles.titulo}>Editar Métricas</h1>
      <div className={styles.selectContainer}>
        <Select />
      </div>
      <div className={styles.tabela}>
        <table className={styles.planilha}>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Exercício</th>
              <th>Carga</th>
              <th>Repetições</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Segunda-feira</td>
              <td>Agachamento</td>
              <td>80kg</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
