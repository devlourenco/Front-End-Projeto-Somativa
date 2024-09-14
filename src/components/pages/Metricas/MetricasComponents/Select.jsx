import style from "./Select.module.css";


export default function Select() {
  return (
    <>
      <select className={style.Select}>
        <option value="">Selecione o dia da Semana</option>
        <option value="">Segunda-feira</option>
        <option value="">Terça-Feira</option>
        <option value="">Quarta-Feira</option>
        <option value="">Quinta-Feira</option>
        <option value="">Sexta-Feira</option>
        <option value="">Sábado</option>
        <option value="">Domingo</option>
      </select>
    </>
  );
}
