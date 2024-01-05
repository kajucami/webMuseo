import React from "react";
import { Card } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";

export default function AvisoLegal() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-full flex items-center justify-center h-screen ">
        <Card className="p-8 my-20 mx-6 w-full ">
          1. Datos del Responsable del Tratamiento: Nombre: Museo Rufino Ruiz
          Ceballos, Dirección: Calle Tal y Pascual n32 Revilla de Camargo
          (Cantabria) 39610, Correo Electrónico: museorrc@gmail.com, Teléfono:
          942 80 56 70 2. Recogida y Tratamiento de Datos Personales: Los datos
          personales recogidos a través de este sitio web serán tratados de
          conformidad con la normativa europea de protección de datos
          (Reglamento (UE) 2016/679, en adelante, RGPD). 3. Finalidad del
          Tratamiento: Los datos personales serán recogidos y tratados con el
          único propósito de responder a consultas, gestionar pedidos, enviar
          información comercial, etc. 4. Base Legal del Tratamiento: La base
          legal para el tratamiento de datos se encuentra en el cumplimiento de
          un contrato, el cumplimiento de obligaciones legales, el
          consentimiento del interesado o el interés legítimo del responsable
          del tratamiento. 5. Derechos de los Usuarios: Los usuarios tienen
          derecho a acceder, rectificar, suprimir, oponerse al tratamiento, así
          como a la portabilidad de sus datos personales. Para ejercer estos
          derechos, pueden ponerse en contacto con nosotros a través de la
          dirección de correo electrónico proporcionada. 6. Medidas de
          Seguridad: Se han implementado medidas técnicas y organizativas
          adecuadas para garantizar la seguridad de los datos personales y
          evitar su alteración, pérdida, tratamiento o acceso no autorizado. 7.
          Cookies: Este sitio web utiliza cookies. Al navegar por nuestro sitio,
          el usuario acepta el uso de cookies de acuerdo con nuestra política de
          cookies [incluir un enlace a la política de cookies]. 8.
          Modificaciones: Nos reservamos el derecho de modificar la presente
          política para adaptarla a novedades legislativas o jurisprudenciales.
          Cualquier modificación será publicada en este sitio web. 9. Contacto:
          Para cualquier duda o consulta sobre nuestra política de privacidad,
          los usuarios pueden ponerse en contacto con nosotros a través de la
          dirección de correo electrónico proporcionada.
        </Card>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
