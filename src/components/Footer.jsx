import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 w-full flex justify-center gap-20 text-white fixed  bottom-0 p-2 z-10">
      <div className="flex justify-center">
        <p>&copy; {new Date().getFullYear()} Museo Rufino Ruiz Ceballos</p>
      </div>
      <div>
        <Link to="/AvisoLegal">Condiciones legales</Link>
      </div>
    </footer>
  );
};

export default Footer;
