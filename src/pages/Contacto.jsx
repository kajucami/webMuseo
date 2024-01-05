import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  validateUsername,
  validateEmail,
  validatePhone,
} from "../validaciones/validation";
import Socials from "../components/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Estado para gestionar los datos del formulario y los errores de validación
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    descripcion: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    descripcion: "",
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  //Validación de los datos del formulario
  const validateInput = (name, value) => {
    switch (name) {
      case "nombre":
        setValidationErrors({
          ...validationErrors,
          nombre: validateUsername(value) ? "" : "Nombre inválido",
        });
        break;
      case "apellidos":
        setValidationErrors({
          ...validationErrors,
          apellidos: validateUsername(value) ? "" : "Apellidos inválidos",
        });
        break;
      case "email":
        setValidationErrors({
          ...validationErrors,
          email: validateEmail(value) ? "" : "Email inválido",
        });
        break;
      case "telefono":
        setValidationErrors({
          ...validationErrors,
          telefono: validatePhone(value) ? "" : "Teléfono inválido",
        });
        break;
      case "descripcion":
        setValidationErrors({
          ...validationErrors,
          descripcion: value.trim() ? "" : "Descripción requerida",
        });
        break;
      default:
        break;
    }
  };

  //Maneja y simula un envio al servidor si los datos son válidos
  const handleFormSubmit = () => {
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) {
      console.error("Error de validación. Verifica los campos.");
    } else {
      setTimeout(() => {
        console.log("Datos enviados al servidor:", formData);
        alert("¡Mensaje enviado correctamente!");
      }, 1000);
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex justify-center">
          <Card className=" w-2/4 m-4 p-4">
            <CardHeader className="flex justify-center text-lg font-semibold">
              <h1>Preguntanos lo que quieras</h1>
            </CardHeader>
            <CardBody className="grid grid-cols-2 gap-4">
              <Input
                autoFocus
                name="nombre"
                label="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              {validationErrors.nombre && (
                <p className="error-message">{validationErrors.nombre}</p>
              )}
              <Input
                autoFocus
                name="apellidos"
                label="Apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
              />
              {validationErrors.apellidos && (
                <p className="error-message">{validationErrors.apellidos}</p>
              )}
              <Input
                autoFocus
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {validationErrors.email && (
                <p className="error-message">{validationErrors.email}</p>
              )}
              <Input
                autoFocus
                name="telefono"
                label="Telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
              {validationErrors.telefono && (
                <p className="error-message">{validationErrors.telefono}</p>
              )}
              <Textarea className=" col-span-2" label="Deja aqui tu mensaje" />
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-amber-500 text-zinc-800 font-bold hover:text-zinc-100 rounded-full"
                onClick={handleFormSubmit}
              >
                Enviar
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Socials />
        </div>
        <div className="flex justify-center items-center  bg-zinc-50 mb-20 pt-10">
          <p className="text-center mr-20 font-bold">
            <FontAwesomeIcon icon={faPhone} className="px-4" />
            942 80 56 70 <br />
            <FontAwesomeIcon icon={faEnvelope} className="px-4" />
            museorrc@gmail.com <br />
            Calle Tal y Pascual n32
            <br /> Revilla de Camargo <br />
            (Cantabria) 39610
          </p>

          <iframe
            className="p-4 rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11593.996386985327!2d-3.85717545!3d43.40839795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4937cdabd8dd03%3A0x607247836368f2ab!2sRevilla%20de%20Camargo%2C%20Cantabria!5e0!3m2!1ses!2ses!4v1703075212004!5m2!1ses!2ses"
            loading="lazy"
            height="400px"
            width="400px"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contacto;
