import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/NavBar";
import Home from "./components/pages/Home/Home";
import Metricas from "./components/pages/Metricas/Metricas";
import Progresso from "./components/pages/Progresso/Progresso";
import Signup from "./components/pages/SignUp/SignUp";
import DetailTraining from "./components/pages/Details/DetailTraining";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/metricas" element={<Metricas />} />
            <Route path="/progresso" element={<Progresso />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/DetailTraining/:idTreino" element={<DetailTraining />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
