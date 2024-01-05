import { useState, useEffect } from "react";

function Datos() {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api/prueba.php")
      .then((response) => response.json())
      .then((data) => setArtistas(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <h2 className="flex items-center justify-center">Lista de Artistas</h2>
      <ul className="grid grid-cols-3 gap-4 justify-center items-center">
        {artistas &&
          artistas.map((artista) => (
            <li key={artista.ArtistaID}>
              {artista.NombreArtista}
              <br />
              {artista.Pais}
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Datos;
