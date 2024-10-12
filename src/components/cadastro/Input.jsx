import React from "react";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handlerChangeUser,
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handlerChangeUser}
      />
    </div>
  );
}
