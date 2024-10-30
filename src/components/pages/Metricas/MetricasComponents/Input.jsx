import React from "react";
import style from "./Input.module.css";

export default function Input({
  type,
  text,
  name,
  placeHolder,
  handlerChangeTraining,
}) {
  return (
    <div className={style.inputControl}>
      <label htmlFor={name}></label>
      {text}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        onChange={handlerChangeTraining}
      />
    </div>
  );
}
