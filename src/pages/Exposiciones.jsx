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
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Gallery from "../components/Galleries";
import Gallery2 from "../components/Galleries2";
import axios from "axios";

const Exposiciones = () => {
  const [expos, setExposiciones] = useState([]);
  const [isOpenGallery1, setOpenGallery1] = useState(false);
  const [isOpenGallery2, setOpenGallery2] = useState(false);

  //Actualiza el estado de las galerias
  const openGallery1 = () => {
    setOpenGallery1(true);
  };

  const closeGallery1 = () => {
    setOpenGallery1(false);
  };

  const openGallery2 = () => {
    setOpenGallery2(true);
  };

  const closeGallery2 = () => {
    setOpenGallery2(false);
  };

  //Petción a base de datos
  useEffect(() => {
    axios
      .get("http://localhost/webMuseo/api/obtenerExpo.php")
      .then((response) => setExposiciones(response.data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  const expo1 = expos.length > 1 ? expos[0] : null;
  const expoNueva = expos.length > 1 ? expos[1] : null;
  const expo2 = expos.length > 1 ? expos[2] : null;

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex justify-center mt-8">
        <div className="grid gap-4 mx-10 w-2/4">
          {/*Proxima Expo*/}
          {expoNueva && (
            <Card
              className="p-6 text-center text-zinc-100 bg-zinc-600 mb-14"
              key={expoNueva.NombreExpo}
            >
              <CardHeader className="flex flex-col font-black text-4xl ">
                <p className="p-4 text-amber-500">
                  Proxima exposición <br />
                </p>
                <Divider className="bg-zinc-100 my-6" />
                {expoNueva.NombreExpo}
              </CardHeader>
              <CardBody>
                <div className="flex justify-center">
                  {expoNueva.FechaInicio} / {expoNueva.FechaFin}
                </div>
                <div className="flex justify-center">
                  {expoNueva.ImagenExpo && (
                    <Image
                      isZoomed
                      src={`data:image/jpeg;base64,${expoNueva.ImagenExpo}`}
                      alt={expoNueva.NombreExpo}
                      className="mt-4 w-full h-auto "
                    />
                  )}
                </div>
              </CardBody>
              <CardFooter className="grid grid-rows-2 font-semibold p-2">
                <div>{expoNueva.Descripcion}</div>
                <Link to="/Entradas">
                  <Button
                    color="foreground"
                    className="m-2 bg-amber-500 text-zinc-900 hover:bg-sky-800 font-bold hover:text-zinc-200"
                  >
                    Comprar entrada
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
          {/*Expo Permanente*/}
          <Modal
            isOpen={isOpenGallery1}
            onOpenChange={closeGallery1}
            size={"4xl"}
            className="p-2"
            backdrop={"opaque"}
          >
            <ModalContent>
              <ModalBody>
                <Gallery />
              </ModalBody>
            </ModalContent>
          </Modal>
          {expo1 && (
            <Card
              className="p-6 text-center text-zinc-200 bg-sky-900 mb-14"
              key={expo1.NombreExpo}
            >
              <CardHeader className="flex flex-col font-black text-4xl ">
                {expo1.NombreExpo}
              </CardHeader>
              <Divider className="bg-zinc-100" />
              <CardBody>
                <div className="flex justify-center">
                  {expo1.FechaInicio} / {expo1.FechaFin}
                </div>
                <div className="flex justify-center">
                  {expo2.ImagenExpo && (
                    <Image
                      onClick={openGallery1}
                      isZoomed
                      src={`data:image/jpeg;base64,${expo1.ImagenExpo}`}
                      alt={expo1.NombreExpo}
                      className="mt-4 w-full h-auto "
                    />
                  )}
                </div>
              </CardBody>
              <CardFooter className="grid grid-rows-2 font-semibold p-2">
                <div>{expo1.Descripcion}</div>
              </CardFooter>
            </Card>
          )}
          {/*Expo Retazos*/}
          <Modal
            isOpen={isOpenGallery2}
            onOpenChange={closeGallery2}
            size={"4xl"}
            className="pt-2 mt-2"
            backdrop={"opaque"}
          >
            <ModalContent>
              <ModalBody>
                <Gallery2 />
              </ModalBody>
            </ModalContent>
          </Modal>
          {expo2 && (
            <Card
              className="p-6 text-center text-zinc-200 bg-sky-900 mb-14"
              key={expo2.NombreExpo}
            >
              <CardHeader className="flex flex-col font-black text-4xl ">
                {expo2.NombreExpo}
              </CardHeader>
              <Divider className="bg-zinc-100" />
              <CardBody>
                <div className="flex justify-center">
                  {expo2.FechaInicio} / {expo2.FechaFin}
                </div>
                <div className="flex justify-center">
                  {expo2.ImagenExpo && (
                    <Image
                      onClick={openGallery2}
                      isZoomed
                      src={`data:image/jpeg;base64,${expo2.ImagenExpo}`}
                      alt={expo2.NombreExpo}
                      className="mt-4 w-full h-auto "
                    />
                  )}
                </div>
              </CardBody>
              <CardFooter className="grid grid-rows-2 font-semibold p-2">
                <div>{expo2.Descripcion}</div>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Exposiciones;
