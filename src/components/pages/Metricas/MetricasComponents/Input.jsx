import style from "./Input.module.css";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handlerChangeTraining,
}) {
  return (
    <div className={style.inputControl}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handlerChangeTraining}
      />
    </div>
  );
}
