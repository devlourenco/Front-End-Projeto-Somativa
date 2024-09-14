import style from "./NavBar.module.css";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className={style.NavBarBox}>
        <ul className={style.list}>
          <Link to='/'>
            <li className={style.home}>Home</li>
          </Link>
          <Link to='metricas'>
            <li className={style.metrica}>Editar Métricas</li>
          </Link>
          <Link to='/progresso'>
            <li className={style.progresso}>Ver Progresso</li>
          </Link>
          <Link to='/perfil'>
            <li className={style.perfil}>Perfil</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}