import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <>
      <div className={styles.table}>
        <img className={styles.image} src="signup-icon.svg" />
        <h2 className={styles.title}>Faça seu cadastro</h2>
        <h4 className={styles.text}>GymBook</h4>
        <div className={styles.InputContainer}>
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Digite seu nome"
          />
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Digite seu email"
          />
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Digite sua senha"
          />
          <input
            className={styles.input}
            type="text"
            name=""
            placeholder="Digite novamente a senha"
          />
          <button className={styles.button}>Sign-Up</button>
        </div>
      </div>
    </>
  );
}
