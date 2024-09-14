import styles from "../Metricas/Metricas.module.css"
import Select from "./MetricasComponents/Select";

export default function Metricas() {
  return (
    <>
      <section className={styles.corpo}>
        <h1 className={styles.titulo}>Editar Métricas</h1>
        <Select />
      </section>
    </>
  );
}
