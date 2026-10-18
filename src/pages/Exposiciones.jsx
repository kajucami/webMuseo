import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Galleries";
import Gallery2 from "../components/Galleries2";

// ==========================================
// IMPORTACIÓN AUTOMÁTICA DE IMÁGENES
// ==========================================

const imagenesObras = import.meta.glob(
  "../assets/img/obras/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Crear un objeto para acceder directamente
// a las imágenes mediante su nombre

const imagenes = Object.fromEntries(
  Object.entries(imagenesObras).map(([ruta, imagen]) => {
    const nombreArchivo = ruta.split("/").pop();
    const nombre = nombreArchivo.substring(
      0,
      nombreArchivo.lastIndexOf(".")
    );

    return [nombre, imagen];
  })
);

// ==========================================
// DATOS DE LAS EXPOSICIONES
// ==========================================

const exposiciones = [
  {
    id: "street-art",
    tipo: "proxima",
    titulo: "Street art",
    fechaInicio: "01/11/2026",
    fechaFin: "30/11/2026",
    descripcion: "De la calle al museo",
    imagen: "Sebas1",
    galeria: null,
  },
  {
    id: "permanente",
    tipo: "permanente",
    titulo: "Exposición permanente",
    fechaInicio: "Exposición permanente",
    fechaFin: "",
    descripcion:
      "Rufino Ruiz Ceballos. Pintura, Cantabria, Tradición",
    imagen: "Ceballos",
    galeria: "permanente",
  },
  {
    id: "retazos",
    tipo: "temporal",
    titulo: "Exposición Retazos",
    fechaInicio: "01/01/2026",
    fechaFin: "31/12/2026",
    descripcion: "Colores y texturas",
    imagen: "keit2",
    galeria: "retazos",
  },
];

// ==========================================
// COMPONENTE TARJETA DE EXPOSICIÓN
// ==========================================

const CardExposicion = ({ exposicion, onOpenGallery }) => {
  const {
    tipo,
    titulo,
    fechaInicio,
    fechaFin,
    descripcion,
    imagen,
    galeria,
  } = exposicion;

  const esProxima = tipo === "proxima";
  const imagenSrc = imagenes[imagen];

  return (
    <Card
      className={`
        p-6
        text-center
        text-zinc-100
        mb-14
        ${esProxima ? "bg-zinc-600" : "bg-sky-900"}
      `}
    >
      {/* CABECERA */}

      <CardHeader className="flex flex-col font-black text-4xl">

        {esProxima && (
          <>
            <p className="p-4 text-amber-500">
              Próxima exposición
            </p>

            <Divider className="bg-zinc-100 my-6" />
          </>
        )}

        <h2>{titulo}</h2>

      </CardHeader>

      {!esProxima && (
        <Divider className="bg-zinc-100 my-4" />
      )}

      {/* CUERPO */}

      <CardBody>

        {/* FECHAS */}

        <div className="flex justify-center mb-4">

          {fechaInicio}

          {fechaFin && ` / ${fechaFin}`}

        </div>

        {/* IMAGEN */}

        <div className="flex justify-center">

          {imagenSrc && (
            <Image
              isZoomed
              src={imagenSrc}
              alt={titulo}
              onClick={
                galeria
                  ? () => onOpenGallery(galeria)
                  : undefined
              }
              className={`
                mt-4
                w-full
                h-auto
                ${galeria ? "cursor-pointer" : ""}
              `}
            />
          )}

        </div>

      </CardBody>

      {/* PIE DE TARJETA */}

      <CardFooter className="flex flex-col font-semibold p-2 gap-4">

        <p>{descripcion}</p>

        {/* BOTÓN COMPRAR ENTRADA */}

        {esProxima && (
          <Button
            as={Link}
            to="/Entradas"
            className="
              bg-amber-500
              text-zinc-900
              hover:bg-sky-800
              hover:text-zinc-200
              font-bold
            "
          >
            Comprar entrada
          </Button>
        )}

        {/* BOTÓN VER GALERÍA */}

        {galeria && (
          <Button
            onPress={() => onOpenGallery(galeria)}
            className="
              bg-amber-500
              text-zinc-900
              hover:bg-amber-600
              font-bold
            "
          >
            Ver galería
          </Button>
        )}

      </CardFooter>

    </Card>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Exposiciones = () => {
  // Un único estado para controlar las galerías
  const [galeriaAbierta, setGaleriaAbierta] = useState(null);

  // Componentes de las galerías
  const galerias = {
    permanente: <Gallery />,
    retazos: <Gallery2 />,
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}

      <header>
        <Header />
      </header>

      {/* CONTENIDO */}

      <main className="flex justify-center mt-8 flex-grow">

        <div className="grid gap-4 mx-4 md:mx-10 w-full md:w-2/4">

          {/* GENERAR EXPOSICIONES */}

          {exposiciones.map((exposicion) => (
            <CardExposicion
              key={exposicion.id}
              exposicion={exposicion}
              onOpenGallery={setGaleriaAbierta}
            />
          ))}

        </div>

      </main>

      {/* MODAL DE GALERÍAS */}

      <Modal
        isOpen={galeriaAbierta !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setGaleriaAbierta(null);
          }
        }}
        size="4xl"
        backdrop="opaque"
        scrollBehavior="inside"
        className="p-2"
      >
        <ModalContent>
          <ModalBody>

            {galerias[galeriaAbierta] || null}

          </ModalBody>
        </ModalContent>
      </Modal>

      {/* FOOTER */}

      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default Exposiciones;