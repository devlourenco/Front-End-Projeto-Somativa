import { useState } from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handlerChangeUser(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  }

  function createNewUser(user) {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow_Headers": "*",
      },
      body: JSON.stringify({
        nome_usuario: user.name,
        email: user.email,
        senha: user.password,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function submit(event) {
    event.preventDefault();
    createNewUser(user);
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src="signup-icon.svg" alt="Sign Up" />
      <h2 className={styles.title}>Faça seu cadastro</h2>
      <h4 className={styles.text}>GymBook</h4>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handlerChangeUser}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={handlerChangeUser}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handlerChangeUser}
          />
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente a senha"
            onChange={handlerChangeUser}
          />
        </div>
        <button className={styles.button} type="submit">
          Sign-Up
        </button>
      </form>
    </div>
  );
}
