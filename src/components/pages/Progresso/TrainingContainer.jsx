import style from "./TrainingContainer.module.css";

const TrainingContainer = (props) => {
  return <div className={style.training_container}>{props.children}</div>;
};

export default TrainingContainer