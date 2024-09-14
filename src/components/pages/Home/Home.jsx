import style from "../Home/Home.module.css";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={style.title}>Show your discipline</h1>
        <img className={style.bgImage} src="miyamoto.jpg" />
      </div>

    </>
  );
}
