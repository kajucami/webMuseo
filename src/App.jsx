import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Museo from "./pages/Museo";
import Contacto from "./pages/Contacto";
import Exposiciones from "./pages/Exposiciones";
import Artistas from "./pages/Artistas";
import Entradas from "./pages/Entradas";
import PanelAdmin from "./pages/PanelAdmin";
import CookieNote from "./components/CookieNote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AvisoLegal from "./components/AvisoLegal";

function App() {
  return (
    <Router>
      <CookieNote />
      <div className=" flex justify-between px-4 bg-sky-900 text-zinc-100">
        <Signup />
        <Login />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Museo" element={<Museo />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Exposiciones" element={<Exposiciones />} />
        <Route path="/Artistas" element={<Artistas />} />
        <Route path="/Entradas" element={<Entradas />} />
        <Route path="/PanelAdmin" element={<PanelAdmin />} />
        <Route path="/AvisoLegal" element={<AvisoLegal />} />
      </Routes>
    </Router>
  );
}

export default App;
