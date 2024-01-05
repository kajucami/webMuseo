import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const COOKIE_NAME = "userSession";

const CookieNote = () => {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const [showCookieNotification, setShowCookieNotification] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //Actualiza estado de cookies
  useEffect(() => {
    const hasConsent = cookies[COOKIE_NAME] === "true";
    setShowCookieNotification(!hasConsent);
  }, [cookies]);

  //Maneja aceptación y declinación
  const handleAccept = () => {
    setCookie(COOKIE_NAME, "true", { path: "/", maxAge: 31536000 });
    setShowCookieNotification(false);
  };

  const handleReject = () => {
    setShowCookieNotification(false);
  };

  return (
    <>
      {showCookieNotification && (
        <div className="fixed bottom-6 left-10 bg-zinc-200 border-zinc-900 p-4 shadow-lg  rounded-lg z-50">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faCookieBite} className=" h-10 p-2" />
          </div>
          <p className="text-sm p-2">Este sitio web utiliza cookies</p>
          <button
            className="px-4 py-2 m-2 bg-sky-700 text-white rounded-full hover:bg-sky-900"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            className="px-4 py-2 bg-amber-500 text-zinc-800 rounded-full hover:bg-amber- hover:text-zinc-100"
            onClick={handleReject}
          >
            Rechazar
          </button>
          <br />
          <div className="flex justify-center">
            <Button color="primary" variant="bordered" onPress={onOpen}>
              Aviso Legal
            </Button>
          </div>
        </div>
      )}
      <Modal
        className="pt-10 mt-20"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Aviso Legal y Protección de Datos
              </ModalHeader>
              <ModalBody>
                1. Datos del Responsable del Tratamiento: Nombre: Museo Rufino
                Ruiz Ceballos, Dirección: Calle Tal y Pascual n32 Revilla de
                Camargo (Cantabria) 39610, Correo Electrónico:
                museorrc@gmail.com, Teléfono: 942 80 56 70 2. Recogida y
                Tratamiento de Datos Personales: Los datos personales recogidos
                a través de este sitio web serán tratados de conformidad con la
                normativa europea de protección de datos (Reglamento (UE)
                2016/679, en adelante, RGPD). 3. Finalidad del Tratamiento: Los
                datos personales serán recogidos y tratados con el único
                propósito de responder a consultas, gestionar pedidos, enviar
                información comercial, etc. 4. Base Legal del Tratamiento: La
                base legal para el tratamiento de datos se encuentra en el
                cumplimiento de un contrato, el cumplimiento de obligaciones
                legales, el consentimiento del interesado o el interés legítimo
                del responsable del tratamiento. 5. Derechos de los Usuarios:
                Los usuarios tienen derecho a acceder, rectificar, suprimir,
                oponerse al tratamiento, así como a la portabilidad de sus datos
                personales. Para ejercer estos derechos, pueden ponerse en
                contacto con nosotros a través de la dirección de correo
                electrónico proporcionada. 6. Medidas de Seguridad: Se han
                implementado medidas técnicas y organizativas adecuadas para
                garantizar la seguridad de los datos personales y evitar su
                alteración, pérdida, tratamiento o acceso no autorizado. 7.
                Cookies: Este sitio web utiliza cookies. Al navegar por nuestro
                sitio, el usuario acepta el uso de cookies de acuerdo con
                nuestra política de cookies [incluir un enlace a la política de
                cookies]. 8. Modificaciones: Nos reservamos el derecho de
                modificar la presente política para adaptarla a novedades
                legislativas o jurisprudenciales. Cualquier modificación será
                publicada en este sitio web. 9. Contacto: Para cualquier duda o
                consulta sobre nuestra política de privacidad, los usuarios
                pueden ponerse en contacto con nosotros a través de la dirección
                de correo electrónico proporcionada.
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-amber-500"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CookieNote;
