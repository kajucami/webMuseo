import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Artistas = () => {
  const [artistas, setArtistas] = useState([]);

  //Petición a la base de datos
  useEffect(() => {
    fetch("http://localhost/webMuseo/api/obtenerArtistas.php")
      .then((response) => response.json())
      .then((data) => setArtistas(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex justify-center mt-8 mb-20">
        <div className="grid grid-cols-2 gap-4 mx-10 w-2/4">
          {artistas &&
            artistas.map((artista) => (
              <Card
                className="p-6 text-center text-zinc-200 bg-sky-900"
                key={artista.NombreArtista}
              >
                <CardHeader className="flex flex-col font-bold ">
                  {artista.NombreArtista}
                </CardHeader>
                <CardBody>
                  {artista.ImagenArtista && (
                    <img
                      src={`data:image/jpeg;base64,${artista.ImagenArtista}`}
                      alt={artista.NombreArtista}
                      className="mt-4 w-full h-auto rounded-lg"
                    />
                  )}
                </CardBody>
                <CardFooter className="grid grid-rows-2 font-semibold ">
                  <div>{artista.Pais}</div>
                  {artista.FechaNacimiento}
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Artistas;
