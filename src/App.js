import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import SobreMim from "./componentes/SobreMim";
import Erro404 from "./componentes/Erro404";
import Menu from "./componentes/Menu";
import RodaPe from "./componentes/RodaPe";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./componentes/Post";
import ScrollToTop from "./componentes/ScrollToTop";

function App() {
  return (
    <div className="App">
      < BrowserRouter>
      <ScrollToTop />
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home/>} />
            <Route path="SobreMim" element={<SobreMim />} />
          </Route>
          <Route path="Posts/:id/" element={<Post/>}/>
          <Route path="/*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>

      <RodaPe/>
    </div>
  );
}

export default App;
