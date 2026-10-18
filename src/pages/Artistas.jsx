import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const archivosImagenes = import.meta.glob(
  "../assets/img/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const imagenes = Object.fromEntries(
  Object.entries(archivosImagenes).map(([ruta, imagen]) => {
    const nombreArchivo = ruta.split("/").pop();
    const nombre = nombreArchivo.substring(0, nombreArchivo.lastIndexOf("."));

    return [nombre, imagen];
  })
);

const artistas = [
  {
    nombre: "Rufino Ruiz Ceballos",
    fechaNacimiento: 1907,
    pais: "España",
    imagen: "Ceballos",
  },
  {
    nombre: "María Blanchard",
    fechaNacimiento: 1881,
    pais: "España",
    imagen: "blanchard",
  },
  {
    nombre: "David Hockney",
    fechaNacimiento: 1937,
    pais: "UK",
    imagen: "DHockney",
  },
  {
    nombre: "Néstor del Barrio",
    fechaNacimiento: 1994,
    pais: "España",
    imagen: "DelBarrio",
  },
  {
    nombre: "Edgar Flores",
    fechaNacimiento: 1982,
    pais: "México",
    imagen: "sanerPortada",
  },
  {
    nombre: "Sebastián Velasco",
    fechaNacimiento: 1988,
    pais: "España",
    imagen: "sebasPortada",
  },
  {
    nombre: "Eduardo Chillida",
    fechaNacimiento: 1924,
    pais: "España",
    imagen: "chillida",
  },
  {
    nombre: "Jeff Koons",
    fechaNacimiento: 1955,
    pais: "USA",
    imagen: "koons",
  },
  {
    nombre: "Joan Fontcuberta",
    fechaNacimiento: 1955,
    pais: "España",
    imagen: "fcuberta",
  },
  {
    nombre: "Sebastião Salgado",
    fechaNacimiento: 1944,
    pais: "Brasil",
    imagen: "salgado",
  },
];

const Artistas = () => (
  <div className="min-h-screen flex flex-col">
    <header>
      <Header />
    </header>
    <main className="flex justify-center mt-8 mb-20 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-10 w-full md:w-2/4">
        {artistas.map((artista) => {
          const imagenSrc = artista.imagen ? imagenes[artista.imagen] : null;

          return (
            <Card
              className="p-2 text-center text-zinc-200 bg-sky-900"
              key={artista.nombre}
            >
              <CardHeader className="flex flex-col font-bold">
                {artista.nombre}
              </CardHeader>
              <CardBody>
                {imagenSrc && (
                  <img
                    src={imagenSrc}
                    alt={artista.nombre}
                    className="mt-4 w-full h-auto rounded-lg"
                  />
                )}
              </CardBody>
              <CardFooter className="grid grid-rows-2 font-semibold">
                <div>{artista.pais}</div>
                {artista.fechaNacimiento}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Artistas;
