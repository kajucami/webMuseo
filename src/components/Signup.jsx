import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { insertarUsuario } from "../services/services";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "../validaciones/validation";
import Welcome from "../components/Wellcome";

//Estado para gestionar los datos del formulario de registro
const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Regístrate");

  //Controla los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  //Valida los campos
  const validateInput = (name, value) => {
    switch (name) {
      case "nombre":
        setValidationErrors({
          ...validationErrors,
          username: validateUsername(value) ? "" : "Nombre de usuario inválido",
        });
        break;
      case "email":
        setValidationErrors({
          ...validationErrors,
          email: validateEmail(value) ? "" : "Email inválido",
        });
        break;
      case "password":
        setValidationErrors({
          ...validationErrors,
          password: validatePassword(value) ? "" : "Contraseña inválida",
        });
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    const { nombre, email, password } = formData;
    const usernameValid = validateUsername(nombre);
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (usernameValid && emailValid && passwordValid) {
      try {
        await insertarUsuario(formData);
        setRegistrationSuccess(true);
        onClose();
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
      }
    } else {
      console.error("Error de validación. Verifica los campos.");
    }
  };

  return (
    <>
      {!registrationSuccess && (
        <Button onPress={onOpen} variant="none">
          {buttonText}
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Introduce tus datos
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="nombre"
                  label="Usuario"
                  variant="bordered"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                {validationErrors.username && (
                  <p className="error-message">{validationErrors.username}</p>
                )}
                <Input
                  name="email"
                  label="Email"
                  variant="bordered"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {validationErrors.email && (
                  <p className="error-message">{validationErrors.email}</p>
                )}
                <Input
                  name="password"
                  label="Contraseña"
                  type="password"
                  variant="bordered"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {validationErrors.password && (
                  <p className="error-message">{validationErrors.password}</p>
                )}
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  className="bg-sky-600 text-zinc-100 hover:bg-sky-800 rounded-full"
                  onClick={handleSignup}
                >
                  Enviar
                </Button>
                <Button
                  className="bg-amber-500 text-zinc-800 hover:text-zinc-100 rounded-full"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {registrationSuccess && <Welcome username={formData.nombre} />}{" "}
    </>
  );
};

export default Signup;
