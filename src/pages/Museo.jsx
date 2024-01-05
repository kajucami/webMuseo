import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Image } from "@nextui-org/react";

const Museo = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="grid grid-cols-2 gap-10 grid-rows-2 justify-center p-6 z-20 mt-20">
          <div className="flex justify-end">
            <Image
              className="w-[400px] h-[500px]"
              isZoomed
              radius="sm"
              alt="Fachada del museo"
              src="src/assets/img/museo1.jpg"
            />
          </div>
          <p className="flex w-[300px] justify-start pt-20 bg-zinc-50 p-4">
            Este museo abrió sus puertas en Octubre de 1999. El diseño tanto del
            edificio como del parque que lo rodea, corrió a cargo del arquitecto
            japonés Shinji Matshudai. Este artsita de fama internacional, ya
            mantenía un fuerte relación con Cantabria, así como con el arte y la
            cultura española. Las raíces noterñas, el entorno natural y unas
            líneas delicadas y firmes, sirvieron de inspiración para crear este
            espacio único.
          </p>
          <div className="flex justify-end pt-20">
            <p className=" w-[300px] text-end bg-zinc-50 p-4">
              No solo exhibe pinturas y esculturas, sino que también es un
              escenario para instalaciones de creación multimedia, arte
              conceptual y performances en vivo. Los visitantes son
              transportados a un mundo donde las fronteras entre el espectador y
              la obra se difuminan dando lugar a una conexión íntima con la
              creación artística.
            </p>
          </div>

          <Image
            className="w-[500px] h-[400px]"
            isZoomed
            radius="sm"
            alt="Exterior del museo"
            src="src/assets/img/museo2.jpg"
          />
        </div>
        <div className="flex justify-center">
          <p className=" max-w-3xl py-10  text-center bg-zinc-50">
            A medida que los años pasaban, el museo seguía evolucionando. Se
            convertía en un catalizador para la preservación de la identidad
            cultural, un lugar donde las generaciones futuras podían conectarse
            con sus raíces.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            isZoomed
            radius="none"
            alt="Hall del museo"
            src="src/assets/img/museo3.jpg"
          />
        </div>
        ;
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Museo;
